<?php

namespace Tienvx\UX\CollectionJs\Tests\Kernel;

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;
use Tienvx\UX\CollectionJs\CollectionJsBundle;

class EmptyAppKernel extends Kernel
{
    use AppKernelTrait;

    public function registerBundles(): iterable
    {
        return [new CollectionJsBundle()];
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
    }
}
