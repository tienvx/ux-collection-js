<?php

namespace Tienvx\UX\CollectionJs\Tests\Kernel;

trait AppKernelTrait
{
    public function getCacheDir(): string
    {
        return $this->createTmpDir('cache');
    }

    public function getLogDir(): string
    {
        return $this->createTmpDir('logs');
    }

    private function createTmpDir(string $type): string
    {
        $dir = sys_get_temp_dir() . '/collection_js_bundle/' . uniqid($type . '_', true);

        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }

        return $dir;
    }
}
