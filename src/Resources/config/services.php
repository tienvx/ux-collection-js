<?php

namespace Symfony\Component\DependencyInjection\Loader\Configurator;

use Tienvx\UX\CollectionJs\Form\CollectionJsType;
use Tienvx\UX\CollectionJs\Twig\CollectionJsTwigExtension;

return static function (ContainerConfigurator $container): void {
    $container->services()
        ->set(CollectionJsType::class)
            ->tag('form.type')
        ->set(CollectionJsTwigExtension::class)
            ->tag('twig.extension')
    ;
};
