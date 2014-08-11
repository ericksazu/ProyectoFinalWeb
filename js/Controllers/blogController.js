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
    /*console.log($scope.publicaciones[0].comments[0]);*/
  });

  $http.get('data/documentos.json').success(function(data) {
    $scope.documentos = data;
  });



  $scope.nuevaPublicacion = function() {
    $scope.getpublishedtitle = $scope.tituloPublicacion;
    $scope.getpublishedmessage = $scope.contenidoPublicacion;

    if($scope.getpublishedtitle != null) {
      $scope.publicaciones.unshift({"title":$scope.getpublishedtitle, "fecha":$scope.date ,"published":$scope.getpublishedmessage, "comments":[]});
      $('#modalNuevaPublicacion').modal('hide');

    }else{
      alert('Digite todos los espacios');
    }

    $scope.getpublishedtitle = '';
    $scope.getpublishedmessage = '';
  };

  $scope.nuevoComentario = function(index) {
    $scope.getpublishedcomment = $scope.agregarComentario;
    console.log($scope.getpublishedcomment);

    $scope.publicaciones[index].comments.push({"comment":$scope.getpublishedcomment});

    $scope.getpublishedcomment = '';
    $scope.agregarComentario = '';

  };

  $scope.guardarTema = function(index) {
    $scope.getpublishedtitle = $scope.publicaciones[index].title;
    $scope.getpublishedmessage = $scope.publicaciones[index].published;

    $scope.publicaciones[index].title = $scope.getpublishedtitle;
    $scope.publicaciones[index].published = $scope.getpublishedmessage;

  };


  $scope.buscar = function() {
    alert($scope.documentos[0].titulo);
  };


  $scope.marca = function(index, votos) {
    if(index <= votos) {
      return "glyphicon glyphicon-star yellow"
    }else{
      return "glyphicon glyphicon-star stars";
    }
  };

});