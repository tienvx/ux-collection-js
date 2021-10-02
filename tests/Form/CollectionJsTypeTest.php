<?php

namespace Tienvx\UX\CollectionJs\Tests\Form;

use Symfony\Component\Form\Tests\Extension\Core\Type\CollectionTypeTest;
use Symfony\Component\Form\Tests\Extension\Core\Type\FileTypeTest;
use Symfony\Component\Form\Tests\Extension\Core\Type\TextTypeTest;
use Tienvx\UX\CollectionJs\Form\CollectionJsType;

class CollectionJsTypeTest extends CollectionTypeTest
{
    public const TESTED_TYPE = CollectionJsType::class;

    public function testDefaultOptions()
    {
        $form = $this->factory
            ->create(static::TESTED_TYPE, null, [
                'entry_type' => FileTypeTest::TESTED_TYPE,
            ])
        ;

        $view = $form->createView();
        $this->assertFalse($view->vars['allow_move_up']);
        $this->assertFalse($view->vars['allow_move_down']);
        $this->assertFalse($view->vars['render_expanded']);
    }

    public function testCustomOptions()
    {
        $form = $this->factory
            ->create(static::TESTED_TYPE, null, [
                'entry_type' => TextTypeTest::TESTED_TYPE,
                'allow_move_up' => true,
                'allow_move_down' => true,
                'render_expanded' => true,
            ])
        ;

        $view = $form->createView();
        $this->assertTrue($view->vars['allow_move_up']);
        $this->assertTrue($view->vars['allow_move_down']);
        $this->assertTrue($view->vars['render_expanded']);
    }
}
