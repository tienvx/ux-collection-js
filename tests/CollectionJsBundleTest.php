<?php

namespace Tienvx\UX\CollectionJs\Tests;

use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpKernel\Kernel;
use Tienvx\UX\CollectionJs\Tests\Kernel\EmptyAppKernel;
use Tienvx\UX\CollectionJs\Tests\Kernel\FrameworkAppKernel;
use Tienvx\UX\CollectionJs\Tests\Kernel\TwigAppKernel;

class CollectionJsBundleTest extends TestCase
{
    public function provideKernels()
    {
        yield 'empty' => [new EmptyAppKernel('test', true)];
        yield 'framework' => [new FrameworkAppKernel('test', true)];
        yield 'twig' => [new TwigAppKernel('test', true)];
    }

    /**
     * @dataProvider provideKernels
     */
    public function testBootKernel(Kernel $kernel)
    {
        $kernel->boot();
        $this->assertArrayHasKey('CollectionJsBundle', $kernel->getBundles());
    }

    public function testFormThemeMerging()
    {
        $kernel = new TwigAppKernel('test', true);
        $kernel->boot();
        $this->assertEquals([
            'form_div_layout.html.twig',
            '@CollectionJs/form_div_layout.html.twig',
            'form_theme.html.twig',
        ], $kernel->getContainer()->getParameter('twig.form.resources'));
    }
}
