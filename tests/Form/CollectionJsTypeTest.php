<?php

namespace Tienvx\UX\CollectionJs\Tests\Form;

use Symfony\Component\Form\Exception\InvalidConfigurationException;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\Test\TypeTestCase;
use Tienvx\UX\CollectionJs\Form\CollectionJsType;

class CollectionJsTypeTest extends TypeTestCase
{
    public const TESTED_TYPE = CollectionJsType::class;

    public function testDefaultOptions()
    {
        $entryOptions = [
            'block_prefix' => 'custom_collection_js_entry',
        ];
        $form = $this->factory
            ->create(static::TESTED_TYPE, null, [
                'entry_type' => FileType::class,
                'entry_options' => $entryOptions,
            ])
        ;
        $this->assertSame($entryOptions, $form->getConfig()->getOption('entry_options'));

        $view = $form->createView();
        $this->assertFalse($view->vars['allow_move_up']);
        $this->assertFalse($view->vars['allow_move_down']);
        $this->assertFalse($view->vars['call_post_add_on_init']);
        $this->assertSame('__name__', $view->vars['prototype_name']);
    }

    public function testCustomOptions()
    {
        $form = $this->factory
            ->create(static::TESTED_TYPE, null, [
                'entry_type' => TextType::class,
                'prototype' => true,
                'prototype_data' => 'New Tag Placeholder',
                'allow_add' => false,
                'allow_delete' => false,
                'allow_move_up' => true,
                'allow_move_down' => true,
                'call_post_add_on_init' => true,
                'prototype_name' => '__test__',
            ])
        ;
        $this->assertSame([
            'block_prefix' => 'collection_js_entry',
        ], $form->getConfig()->getOption('entry_options'));

        $view = $form->createView();
        $this->assertInstanceOf(FormView::class, $view->vars['prototype']);
        $this->assertTrue($view->vars['allow_move_up']);
        $this->assertTrue($view->vars['allow_move_down']);
        $this->assertTrue($view->vars['call_post_add_on_init']);
        $this->assertSame('__test__', $view->vars['prototype_name']);
    }

    public function testDisablePrototype()
    {
        $this->expectExceptionObject(new InvalidConfigurationException(sprintf('You must enable prototype for form type %s.', static::TESTED_TYPE)));
        $this->factory
            ->create(static::TESTED_TYPE, null, [
                'entry_type' => TextType::class,
                'prototype' => false,
            ])
        ;
    }
}
