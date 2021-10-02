<?php

namespace Tienvx\UX\CollectionJs\Tests\Kernel;

use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Kernel;
use Tienvx\UX\CollectionJs\CollectionJsBundle;

class FrameworkAppKernel extends Kernel
{
    use AppKernelTrait;

    public function registerBundles()
    {
        return [new FrameworkBundle(), new CollectionJsBundle()];
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(function (ContainerBuilder $container) {
            $container->loadFromExtension('framework', ['secret' => '$ecret', 'test' => true]);
        });
    }
}
