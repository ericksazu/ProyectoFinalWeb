angular.module('module').controller('blogController', function($scope, $http, $route) {

  $scope.datos = [];
  $scope.publicaciones = [];
  $scope.publicacionesUsuario = [];
  $scope.documentos = [];
  $scope.date = new Date();
  $scope.currentPage = 0;
  $scope.pageSize = 3;
  $scope.correo = $scope.usuarioLogueado.email;



  $('#loading').show();
  $('.pagination').hide();
  $('.btn-publicacion').hide();

  $http.get('data/usuario.json').success(function(data) {
    $scope.datos = data;
  });

  $http.get('phpConexion/blog/obtener_blogs.php').success(function(data) {
    $scope.publicaciones = data;

    for (var i = 0; i < $scope.publicaciones.length; i++) {
      if($scope.publicaciones[i].autor == $scope.correo){
        $scope.publicacionesUsuario.push($scope.publicaciones[i]);
      }
    };

    $('#loading').hide();
    $('.btn-publicacion').delay(500).show(0);
    $('.pagination').delay(3000).show(0);
  });

  $http.get('data/documentos.json').success(function(data) {
    $scope.documentos = data;
  });

  $scope.numberOfPagesTemas = function(){
    return Math.ceil($scope.publicacionesUsuario.length/$scope.pageSize);
  }


  $scope.nuevaPublicacion = function() {

    $http.post('phpConexion/blog/agregar_blogs.php', {'descripcionPublicacion': $scope.contenidoPublicacion, 'tema': $scope.tituloPublicacion, 'fecha': $scope.date, 'autor': $scope.correo}).success(function(data, status) {
      console.log("inserted good");
      $scope.algo = data;
    }).error(function(data, status) {
        console.log("inserted wrong");
    });

    $('#modalNuevaPublicacion').modal('hide');
    $('.modal-backdrop').remove();

    $route.reload();


    /*$scope.getpublishedtitle = $scope.tituloPublicacion;
    $scope.getpublishedmessage = $scope.contenidoPublicacion;*/

    /*if($scope.getpublishedtitle != null) {
      $scope.publicaciones.unshift({"title":$scope.getpublishedtitle, "fecha":$scope.date ,"published":$scope.getpublishedmessage, "comments":[]});
      $('#modalNuevaPublicacion').modal('hide');

    }else{
      alert('Digite todos los espacios');
    }*/

    $scope.tituloPublicacion = '';
    $scope.contenidoPublicacion = '';
  };

  $scope.nuevoComentario = function(index) {

    $scope.descripcionComentario = $scope.agregarComentario;
    $scope.idEntradaBlog = $scope.publicacionesUsuario[index].idBlog;

    $http.post('phpConexion/blog/agregar_comentarios.php', {'descripcion': $scope.descripcionComentario, 'Blog_idBlog': $scope.idEntradaBlog}).success(function(data, status) {
      console.log("inserted good");
      $scope.algo = data;
    }).error(function(data, status) {
        console.log("inserted wrong");
    });

    /*$scope.getpublishedcomment = $scope.agregarComentario;
    console.log($scope.getpublishedcomment);

    $scope.publicaciones[index].comments.push({"comment":$scope.getpublishedcomment});*/

    $scope.descripcionComentario = '';
    $scope.idEntradaBlog = '';

  };

  $scope.guardarTema = function(index) {

    $scope.nuevoContenido = $scope.publicacionesUsuario[index].descripcionPublicacion;
    $scope.nuevoTema = $scope.publicacionesUsuario[index].tema;
    $scope.idEntradaBlog = $scope.publicacionesUsuario[index].idBlog;

    $http.post('phpConexion/blog/editar_blogs.php', {'descripcionPublicacion': $scope.nuevoContenido, 'tema': $scope.nuevoTema, 'idBlog': $scope.idEntradaBlog}).success(function(data, status) {
      console.log("inserted good");
      $scope.algo = data;
    }).error(function(data, status) {
        console.log("inserted wrong");
    });

    /*$scope.getpublishedtitle = $scope.publicaciones[index].title;
    $scope.getpublishedmessage = $scope.publicaciones[index].published;

    $scope.publicaciones[index].title = $scope.getpublishedtitle;
    $scope.publicaciones[index].published = $scope.getpublishedmessage;*/

  };

  $scope.obtenerComentarios = function(index) {

    $scope.idEntradaBlog = $scope.publicacionesUsuario[index].idBlog;

    $http.post('phpConexion/blog/obtener_comentarios.php', {'Blog_idBlog': $scope.idEntradaBlog}).success(function(data, status) {
      console.log("inserted good");
      $scope.comentarios = data;
    }).error(function(data, status) {
        console.log("inserted wrong");
    });
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