<?

$conf['endpoint']['local'] = 'http://dydra.com/agraves/www2011/sparql';
$conf['home'] = '/var/www/myapp/lodspeakr/';
$conf['basedir'] = 'http://localhost/myapp/';
$conf['debug'] = false;
$conf['mirror_external_uris'] = 'http://data.semanticweb.org/';

/*ATTENTION: By default this application is available to
 * be exported and copied (its configuration)
 * by others. If you do not want that, 
 * turn the next option as false
 */ 
$conf['export'] = true;

#If you want to add/overrid a namespace, add it here
$conf['ns']['local']   = 'http://data.semanticweb.org/';
$conf['ns']['base']   = 'http://localhost/myapp/';
?>
