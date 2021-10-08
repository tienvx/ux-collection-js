<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tienvx\UX\CollectionJs\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CollectionJsType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function getParent(): string
    {
        return CollectionType::class;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'allow_move_up' => false,
            'allow_move_down' => false,
            'render_expanded' => false,
            'entry_options' => function (OptionsResolver $entryOptionsResolver) {
                $entryOptionsResolver
                    ->setDefaults([
                        'label' => false,
                        'block_prefix' => 'collection_js_entry',
                    ]);
            },
            'call_post_add_on_init' => false,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars = array_replace($view->vars, [
            'allow_move_up' => $options['allow_move_up'],
            'allow_move_down' => $options['allow_move_down'],
            'render_expanded' => $options['render_expanded'],
            'prototype_name' => $options['prototype_name'],
            'call_post_add_on_init' => $options['call_post_add_on_init'],
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'collection_js';
    }
}
