


var nombreCache = 'holaMundo';
self.addEventListener(
	'install',
	function(evento){
		evento.waitUntil(
			caches.open(nombreCache)
			.then(
				function(cache){
					cache.addAll(
						[
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
                            '/static/favicons/favicon.ico',
                            'logos.png'

						]
					);
				}
			)
		);
	}
);

self.addEventListener(
	'fetch',
	function(evento){
		evento.respondWith(
			caches.match(evento.request)
			.then(
				function(respuesta){
					if(respuesta){
						return respuesta;
					}
					return fetch(evento.request);
				}
			)
		);
	}
);
