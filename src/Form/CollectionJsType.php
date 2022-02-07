<?php

namespace Tienvx\UX\CollectionJs\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
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
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $prototypeOptions = array_replace([
            'required' => $options['required'],
            'label' => $options['prototype_name'] . 'label__',
        ], $options['entry_options']);

        if (null !== $options['prototype_data']) {
            $prototypeOptions['data'] = $options['prototype_data'];
        }

        $prototype = $builder->create($options['prototype_name'], $options['entry_type'], $prototypeOptions);
        $builder->setAttribute('prototype', $prototype->getForm());
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $entryOptionsNormalizer = function (Options $options, $value) {
            $value['block_prefix'] = $value['block_prefix'] ?? 'collection_js_entry';

            return $value;
        };

        $resolver->setDefaults([
            'allow_move_up' => false,
            'allow_move_down' => false,
            'call_post_add_on_init' => false,
        ]);
        $resolver->setNormalizer('entry_options', $entryOptionsNormalizer);
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars = array_replace($view->vars, [
            'allow_move_up' => $options['allow_move_up'],
            'allow_move_down' => $options['allow_move_down'],
            'prototype_name' => $options['prototype_name'],
            'call_post_add_on_init' => $options['call_post_add_on_init'],
            'collection_id' => uniqid(),
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
