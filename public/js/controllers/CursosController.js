angular.module('ifsp').controller('CursosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
			{ "_id": 1, "nome": "Tecnologia em Análise e Desenvolvimento de Sistemas", "coordenador": "rafael.neves@ifsp.edu.br" },
			{ "_id": 2, "nome": "Engenharia de Produção", "coordenador": "rodrigo.inoue@ifsp.edu.br" },
            { "_id": 3, "nome": "Licenciatura em Letras Português/Inglês", "coordenador": "matheus.nakano@ifsp.edu.br" },
            { "_id": 4, "nome": "Tecnologia em Gestão Pública", "coordenador": "matheus.nakano@ifsp.edu.br" }
        ];

        $scope.filtro = '';
});
