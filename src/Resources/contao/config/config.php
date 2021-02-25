<?php

/*
 * This file is part of Universal Toggler.
 * 
 * (c) heimseiten.de - Webdesign aus Köln 2021 <info@heimseiten.de>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/heimseiten/contao-universal-toggler-bundle
 */


if (TL_MODE == 'FE') {
    $GLOBALS['TL_HEAD'][] = '<script defer src="/bundles/heimseitencontaouniversaltoggler/universal-toggler.js"></script>'; 
}