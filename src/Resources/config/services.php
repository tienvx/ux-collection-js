<?php

namespace Symfony\Component\DependencyInjection\Loader\Configurator;

use Tienvx\UX\CollectionJs\Form\CollectionJsType;

return static function (ContainerConfigurator $container): void {
    $container->services()
        ->set(CollectionJsType::class)
            ->tag('form.type')
    ;
};
