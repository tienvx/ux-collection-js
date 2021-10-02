<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude('Resources/assets/dist')
    ->exclude('Resources/assets/node_modules')
    ->in(__DIR__.'/src')
    ->in(__DIR__.'/tests')
;

$config = new PhpCsFixer\Config();

return $config
    ->setRules([
        '@PSR12' => true,
        '@Symfony' => true,
        'concat_space' => ['spacing' => 'one'],
        'single_line_throw' => false,
    ])
    ->setUsingCache(false)
    ->setFinder($finder)
;
