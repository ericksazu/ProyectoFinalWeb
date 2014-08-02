angular.module('module').controller('blogController', function($scope, $http) {

    $scope.datos = [];
    $scope.datos1 = [];
    $scope.datos2 = [];
    $scope.documentos = [];

    $http.get('data/usuario2.json').success(function(data) {
        $scope.datos = data;
    });

    $http.get('data/news.json').success(function(data) {
        $scope.datos1 = data;
    });

    $http.get('data/published.json').success(function(data) {
        $scope.datos2 = data;
    });

    $http.get('data/documentos.json').success(function(data) {
        $scope.documentos = data;
    });

    $scope.buscar = function() {
        alert($scope.documentos[0].titulo);
    };

    $scope.marca = function(index, votos) {
        console.log(index, votos);
        if (index <= votos) {
            return "glyphicon glyphicon-star yellow"
        } else {
            return "glyphicon glyphicon-star stars";
        }
    };

});