angular.module('ifsp').controller('ContatosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.contatos  = [
			{ "_id": 1, "nome": "Rafael Neves", "email": "rafael.neves@ifsp.edu.br" },
			{ "_id": 2, "nome": "Rodrigo Inoue", "email": "rodrigo.inoue@ifsp.edu.br" },
			{ "_id": 3, "nome": "Matheus Nakano", "email": "matheus.nakano@ifsp.edu.br" }
        ];

        $scope.filtro = '';
});
