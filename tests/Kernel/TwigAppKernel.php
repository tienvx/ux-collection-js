<?php

namespace Tienvx\UX\CollectionJs\Tests\Kernel;

use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Kernel;
use Tienvx\UX\CollectionJs\CollectionJsBundle;
use Tienvx\UX\CollectionJs\Twig\CollectionJsTwigExtension;

class TwigAppKernel extends Kernel
{
    use AppKernelTrait;

    public function registerBundles(): iterable
    {
        return [new FrameworkBundle(), new TwigBundle(), new CollectionJsBundle()];
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(function (ContainerBuilder $container) {
            $container->loadFromExtension('framework', ['secret' => '$ecret', 'test' => true]);
            $container->loadFromExtension('twig', [
                'default_path' => __DIR__ . '/templates',
                'strict_variables' => true,
                'form_themes' => [
                    'form_theme.html.twig',
                ],
                'exception_controller' => null,
                'debug' => '%kernel.debug%',
            ]);

            $container->setAlias('test.collection_js.twig_extension', CollectionJsTwigExtension::class)->setPublic(true);
        });
    }
}
