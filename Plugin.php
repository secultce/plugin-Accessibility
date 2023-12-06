<?php

namespace Accessibility;

use MapasCulturais\App;
use MapasCulturais\i;


class Plugin extends \MapasCulturais\Plugin
{
    function __construct(array $config = [])
    {
        parent::__construct($config);
    }

    public function _init()
    {
        $app = App::i();

        $app->view->assetManager->publishFolder('accessibility/img', 'accessibility/img');

        // enqueue scripts and styles
        $app->view->enqueueScript('app', 'accessibility', 'js/accessibility.js');
        $app->view->enqueueStyle('app', 'accessibility', 'css/accessibility.css');
         
        // add hooks
        $app->hook('template(<<*>>.<<*>>.nav.main.events):before', function () use ($app) {
            $app->view->part('accessibility/controls.php');
        });
       
        $app->hook('template(<<*>>.<<*>>.main-footer):end', function () use ($app) {
            $this->part('accessibility/vlibras');    
        });    
    }

    public function register()
    {
        $app = App::i();
            
    }
}
?>
