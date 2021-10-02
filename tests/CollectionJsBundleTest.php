<?php

namespace Tienvx\UX\CollectionJs\Tests;

use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpKernel\Kernel;
use Tienvx\UX\CollectionJs\Tests\Kernel\EmptyAppKernel;
use Tienvx\UX\CollectionJs\Tests\Kernel\FrameworkAppKernel;

class CollectionJsBundleTest extends TestCase
{
    public function provideKernels()
    {
        yield 'empty' => [new EmptyAppKernel('test', true)];
        yield 'framework' => [new FrameworkAppKernel('test', true)];
    }

    /**
     * @dataProvider provideKernels
     */
    public function testBootKernel(Kernel $kernel)
    {
        $kernel->boot();
        $this->assertArrayHasKey('CollectionJsBundle', $kernel->getBundles());
    }
}
