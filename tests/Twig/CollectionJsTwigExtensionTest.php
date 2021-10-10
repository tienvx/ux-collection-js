<?php

namespace Tienvx\UX\CollectionJs\Tests\Twig;

use PHPUnit\Framework\TestCase;
use Tienvx\UX\CollectionJs\Tests\Kernel\TwigAppKernel;
use Twig\Environment;
use Twig\TwigFilter;

class CollectionJsTwigExtensionTest extends TestCase
{
    /**
     * @dataProvider valueDataProvider
     */
    public function testRepresentAsString(?TwigFilter $filter, $value, string $expected)
    {
        $kernel = new TwigAppKernel('test', true);
        $kernel->boot();
        $container = $kernel->getContainer()->get('test.service_container');

        if ($filter) {
            $container->get(Environment::class)->addFilter($filter);
        }

        $rendered = $container->get('test.collection_js.twig_extension')->representAsString(
            $container->get(Environment::class),
            $value
        );

        $this->assertSame($expected, $rendered);
    }

    public function valueDataProvider(): array
    {
        $text = 'some text';
        $textFromFilter = 'some text from filter';
        $object = new class($text) {
            private string $text;

            public function __construct(string $text)
            {
                $this->text = $text;
            }

            public function __toString(): string
            {
                return $this->text;
            }
        };
        $filter = new TwigFilter('ea_as_string', fn () => $textFromFilter);

        return [
            [$filter, $text, $textFromFilter],
            [$filter, $object, $textFromFilter],
            [$filter, 123, $textFromFilter],
            [$filter, [$text], $textFromFilter],
            [$filter, true, $textFromFilter],
            [$filter, false, $textFromFilter],
            [$filter, new \stdClass(), $textFromFilter],
            [null, $text, $text],
            [null, $object, $text],
            [null, 123, ''],
            [null, [$text], ''],
            [null, true, ''],
            [null, false, ''],
            [null, new \stdClass(), ''],
        ];
    }
}
