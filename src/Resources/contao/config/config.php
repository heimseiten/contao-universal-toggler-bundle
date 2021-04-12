<?php

if (TL_MODE == 'FE') {
    $GLOBALS['TL_HEAD'][] = '<script defer src="/bundles/heimseitencontaouniversaltoggler/universal-toggler.js"></script>';
    $GLOBALS['TL_CSS'][] = 'bundles/heimseitencontaouniversaltoggler/universal-toggler.scss|static';
}