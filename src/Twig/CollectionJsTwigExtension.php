<?php

namespace Tienvx\UX\CollectionJs\Twig;

use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class CollectionJsTwigExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('collection_js_as_string', [$this, 'representAsString'], ['needs_environment' => true]),
        ];
    }

    public function representAsString(Environment $environment, $value): string
    {
        if ($filter = $environment->getFilter('ea_as_string')) {
            return $filter->getCallable()($value);
        }

        if (\is_string($value)) {
            return $value;
        }

        if (\is_object($value) && method_exists($value, '__toString')) {
            return (string) $value;
        }

        return '';
    }
}
