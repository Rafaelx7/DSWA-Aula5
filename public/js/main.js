angular.module('ifsp', ['ngRoute']).config(function($routeProvider) {
		$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato/:contatoId', {
    	templateUrl: 'partials/contato.html', 
    	controller: 'ContatoController'
    });

	$routeProvider.otherwise({redirectTo: '/contatos'});
	
	$routeProvider.when('/cursos', {
    	templateUrl: 'partials/cursos.html', 
    	controller: 'CursosController'
	});
	
	$routeProvider.when('/cursos/:cursoId', {
    	templateUrl: 'partials/cursos.html', 
    	controller: 'CursoController'
    });

	$routeProvider.otherwise({redirectTo: '/cursos'});
});