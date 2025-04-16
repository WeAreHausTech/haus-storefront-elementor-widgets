<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf3a17a279176b95aff4019f7eb92d699
{
    public static $files = array (
        'e91f88484a8b76e29cc542f1696bf427' => __DIR__ . '/../..' . '/init.php',
    );

    public static $prefixLengthsPsr4 = array (
        'H' => 
        array (
            'HausStorefrontElementorWidgets\\' => 31,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'HausStorefrontElementorWidgets\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf3a17a279176b95aff4019f7eb92d699::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf3a17a279176b95aff4019f7eb92d699::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf3a17a279176b95aff4019f7eb92d699::$classMap;

        }, null, ClassLoader::class);
    }
}
