// Definición del nombre de la caché
var nombreCache = 'holaMundo';

// Evento 'install': se ejecuta cuando el Service Worker es instalado
self.addEventListener('install', function(evento) {
    // Espera hasta que la operación de caché esté completa
    evento.waitUntil(
        // Abre una nueva caché con el nombre especificado
        caches.open(nombreCache).then(function(cache) {
            // Agrega los recursos especificados a la caché
            cache.addAll([
                // Lista de recursos a ser almacenados en la caché al instalar el Service Worker
                'script.js',
                'static/img/utpp.png',
                'static/img/aplicacion_movil_nativa_1.jpg', 
                'static/img/aplicacion_movil_nativa_2.jpg ',
                'static/img/aplicacion_multiplataforma_1.jpg ',
                'static/img/aplicacion_multiplataforma_2.jpg ',
                'static/img/aplicacion_multiplataforma_2.png ',
                'static/img/aplicacion_orientada_servicios_1.png ',
                'static/img/aplicacion_orientada_servicios_2.jpg ',
                'static/img/aplicacion_web_1.png ',
                'static/img/aplicacion_web_2.png ',
                'static/img/aplicacion_web_progresiva_1.png ',
                'static/img/aplicacion_web_progresiva_2.png ',
                'static/img/biblio.png ',
                'static/img/bootstrap.png ',
                'static/img/compara.png ',
                'static/img/css.png ',
                'static/img/html.png ',
                'static/img/js.png ',
                'static/img/logos.png ',
                'static/img/proceso1.png ',
                'static/img/proceso2.png ',
                'static/img/proceso3.png ',
                'static/img/proceso4.png ',
                'static/img/proceso5.png ',
                'static/img/proceso6.png ',
                'static/img/proceso7.png ',
                'static/img/proceso8.png ',
                'static/img/utplogo.png ',
                'static/img/visual.png ',
                'static/img/xampp.png',
                'static/css/estilos.css',
                'info/aplicacion_web.html',
                'info/app_movil_nativa.html ',
                'info/app_multiplataforma.txt ',
                'info/app_orientada_servicios.txt ',
                'info/app_progresiva.html ',
                'info/bibliografias.html ',
                'info/herramientas_utilizadas.html ',
                'info/parametros_configuracion.html ',
                'info/tabla_comparativa.html',
                'static/favicons/favicon.ico',
                'logos.png',
                'static/img/p2-3.jpeg', 
                'static/img/p2-1.jpeg', 
                'static/img/p2-2.jpeg', 
                'static/img/p2-4.jpeg',
                'info/parametros_configiracion_sw_manifest.html'
            ]);
        })
    );
});

// Evento 'fetch': se ejecuta cada vez que se realiza una solicitud desde la página
self.addEventListener('fetch', function(evento) {
    // Responde a la solicitud con contenido de la caché si está disponible, de lo contrario, realiza la solicitud a la red
    evento.respondWith(
        // Busca la solicitud en la caché
        caches.match(evento.request).then(function(respuesta) {
            // Si la respuesta está en la caché, la devuelve
            if (respuesta) {
                return respuesta;
            }
            // Si la respuesta no está en la caché, realiza la solicitud a la red
            return fetch(evento.request);
        })
    );
});
