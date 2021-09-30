<?php

namespace Tienvx\Bundle\UXCollectionJs\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Tienvx\Bundle\UXCollectionJs\Form\CollectionJsType;

class FormCollectionExtension extends Extension implements PrependExtensionInterface
{
    /**
     * {@inheritdoc}
     */
    public function prepend(ContainerBuilder $container): void
    {
    }

    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container): void
    {
        $container
            ->setDefinition('form.ux_collection_js', new Definition(CollectionJsType::class))
            ->addTag('form.type')
            ->setPublic(false)
        ;
    }
}
