angular.module('module').controller('blogController', function($scope, $http) {

  $scope.datos = [];
  $scope.publicaciones = [];
  $scope.documentos = [];
  $scope.date = new Date();

  $http.get('data/usuario.json').success(function(data) {
    $scope.datos = data;
  });

  $http.get('data/published.json').success(function(data) {
    $scope.publicaciones = data;
  });

  $http.get('data/documentos.json').success(function(data) {
    $scope.documentos = data;
  });

  $scope.nuevaPublicacion = function() {

    $scope.getpublishedtitle = $scope.tituloPublicacion;
    $scope.getpublishedmessage = $scope.contenidoPublicacion;

    if($scope.getpublishedtitle != '') {

      $scope.publicaciones.unshift({"title":$scope.getpublishedtitle, "fecha":$scope.date ,"published":$scope.getpublishedmessage});

    }else{
      alert('Digite todos los espacios');
    }

    console.log($scope.publicaciones);
    $scope.getpublishedtitle = '';
    $scope.getpublishedmessage = '';
  };


  $scope.buscar = function() {
    alert($scope.documentos[0].titulo);
  };


  $scope.marca = function(index, votos) {
    /*console.log(index, votos);*/
    if(index <= votos) {
      return "glyphicon glyphicon-star yellow"
    }else{
      return "glyphicon glyphicon-star stars";
    }
  };



});