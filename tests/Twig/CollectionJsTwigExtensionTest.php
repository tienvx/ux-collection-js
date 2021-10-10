<?php

namespace Tienvx\UX\CollectionJs\Tests\Twig;

use PHPUnit\Framework\TestCase;
use Tienvx\UX\CollectionJs\Tests\Kernel\TwigAppKernel;
use Twig\Environment;

class CollectionJsTwigExtensionTest extends TestCase
{
    /**
     * @dataProvider valueDataProvider
     */
    public function testRepresentAsString($value, string $expected)
    {
        $kernel = new TwigAppKernel('test', true);
        $kernel->boot();
        $container = $kernel->getContainer()->get('test.service_container');

        $rendered = $container->get('test.collection_js.twig_extension')->representAsString(
            $container->get(Environment::class),
            $value
        );

        $this->assertSame($expected, $rendered);
    }

    public function valueDataProvider(): array
    {
        $text = 'some text';
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

        return [
            [$text, $text],
            [$object, $text],
            [123, ''],
            [[$text], ''],
            [true, ''],
            [false, ''],
            [new \stdClass(), ''],
        ];
    }
}
