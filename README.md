# UX Collection JS  [![Build Status][actions_badge]][actions_link] [![Coverage Status][coveralls_badge]][coveralls_link]

UX collection JS is a Symfony bundle providing Symfony UX integration for collection form type with the help from [Symfony Collection JS](https://github.com/ruano-a/symfonyCollectionJs) library.

## Installation

UX Collection JS requires PHP 7.4+ and Symfony 4.4+.

Install this bundle using Composer and Symfony Flex:

```sh
composer require tienvx/ux-collection-js

# Don't forget to install the JavaScript dependencies as well and compile
yarn add --dev '@symfony/stimulus-bridge@^2.0.0'
yarn install --force
yarn encore dev
```

## Usage

Use the new CollectionType class defined by this bundle:

```php
// ...
use Tienvx\UX\CollectionJs\Form\CollectionJsType;

class TaskType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ...
            ->add('tags', CollectionJsType::class, [
                'entry_type' => TextType::class,
                'allow_add' => true,
                'allow_remove' => true,
                'allow_move_up' => true,
                'allow_move_down' => true,
                'render_expanded' => false,
                'prototype' => true,
            ])
            // ...
        ;
    }

    // ...
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](LICENSE)

[actions_badge]: https://github.com/tienvx/ux-collection-js/workflows/main/badge.svg
[actions_link]: https://github.com/tienvx/ux-collection-js/actions

[coveralls_badge]: https://coveralls.io/repos/tienvx/ux-collection-js/badge.svg?branch=master&service=github
[coveralls_link]: https://coveralls.io/github/tienvx/ux-collection-js?branch=master
