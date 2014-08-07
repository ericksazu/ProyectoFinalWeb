angular.module('module').controller('blogController', function($scope, $http) {

    $scope.datos = [];
    $scope.datos1 = [];
    $scope.documentos = [];

    $http.get('data/usuario.json').success(function(data) {
        $scope.datos = data;
    });

    $http.get('data/published.json').success(function(data) {
        $scope.datos1 = data;
    });

    $http.get('data/documentos.json').success(function(data) {
        $scope.documentos = data;
    });

    $scope.nuevaPublicacion = function() {

        $scope.getpublishedtitle = document.getElementById('idPublished').value;
        $scope.getpublishedmessage = document.getElementById('textPublished').value;

        if ($scope.getpublishedtitle != '') {
            $scope.datos1.$scope.title.push($scope.getpublishedtitle);
            $scope.datos1.$scope.published.push($scope.getpublishedmessage);
        } else {
            alert('Digite todos los espacios');
        }

        $scope.getpublishedtitle = '';
        $scope.getpublishedmessage = '';
    };

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