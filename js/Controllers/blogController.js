angular.module('module').controller('blogController', function($scope, $http, $route, $rootScope) {

  $scope.datos = [];
  $scope.publicaciones = [];
  $scope.publicacionesUsuario = [];
  $scope.usuariosBlog = [];
  $scope.documentos = [];
  $scope.date = new Date();
  $scope.currentPage = 0;
  $scope.pageSize = 3;

  $scope.mostrarUsuarioPorCorreo = $scope.usuarioLogueado.email;
  $scope.correo = $scope.usuarioLogueado.email;
  $scope.visible = $rootScope.usuarioLogueado.idRol == 12;
  $scope.cambioBlog = true;
  $scope.visibleBlog = $rootScope.usuarioLogueado.idRol == 12 && $scope.correo == $scope.usuarioLogueado.email;
  $scope.usuarioActual = $scope.usuarioLogueado.nombre;
  $scope.usuarioActualFoto = $scope.usuarioLogueado.foto;


  $('#loading').show();
  $('.pagination').hide();
  $('.btn-publicacion').hide();

  $http.get('phpConexion/obtenerDocumentos.php').success(function (data) {
    $scope.documentos = data;
  });

  $http.get('phpConexion/login/usuarios.php').success(function(data) {
    $scope.usuarios = data;

    for (var i = 0; i < $scope.usuarios.length; i++) {
      if($scope.usuarios[i].nivelUniversitario == 'Estudiante'){
        $scope.usuariosBlog.push($scope.usuarios[i].email);
      }
    };
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

  $scope.numberOfPagesTemas = function(){
    return Math.ceil($scope.publicacionesUsuario.length/$scope.pageSize);
  }

  $scope.compartirRedes = function(){
    $('.prettySocial').prettySocial();
  }

  $scope.buscarNombres = function(){
    $('#tags').autocomplete({
      source: $scope.usuariosBlog
    });
  }

  $scope.mostrarBlogs = function(){
    $scope.visible = true;
    $scope.correo = $('#tags').val();
    $scope.mostrarUsuarioPorCorreo = $('#tags').val();

    if($scope.correo === ''){
      if($rootScope.usuarioLogueado.idRol != 12 && $scope.visible && $scope.usuarioActual == $scope.usuarioLogueado.nombre){
        //alert('esta vacio');
        $('#alertVacio').removeClass('hidden');
          setTimeout(function() {
            $('#alertVacio').addClass('hidden');
        }, 3000);
        $scope.visible = !$scope.visible;
        $('#tags').val('');
        return;
      }
      if($rootScope.usuarioLogueado.idRol != 12 && $scope.visible && $scope.usuarioActual != $scope.usuarioLogueado.nombre){
        //alert('esta vacio');
        $('#alertVacio').removeClass('hidden');
          setTimeout(function() {
            $('#alertVacio').addClass('hidden');
        }, 3000);
        $('#tags').val('');
        return;
      }else{
        //alert('esta vacio');
        $('#alertVacio').removeClass('hidden');
          setTimeout(function() {
            $('#alertVacio').addClass('hidden');
        }, 3000);
        $('#tags').val('');
        return;
      }
      if($rootScope.usuarioLogueado.idRol == 12){
        //alert('esta vacio');
       $('#alertVacio').removeClass('hidden');
          setTimeout(function() {
            $('#alertVacio').addClass('hidden');
        }, 3000);
        $('#tags').val('');
        return;
      }

    }else{
      if($scope.correo != ''){
        for (var i = 0; i < $scope.publicaciones.length; i++) {
          if($scope.publicaciones[i].autor == $scope.correo){
            //alert('el usuario existe');
            $('#tags').val('');
            $scope.publicacionesUsuario = [];
            for (var i = 0; i < $scope.publicaciones.length; i++) {
              if($scope.publicaciones[i].autor == $scope.mostrarUsuarioPorCorreo){
                $scope.publicacionesUsuario.push($scope.publicaciones[i]);
              }
            };

            for (var i = 0; i < $scope.usuarios.length; i++) {
              if($scope.usuarios[i].email == $scope.mostrarUsuarioPorCorreo){
                $scope.cambioBlog = false;
                $scope.usuarioActualFoto = $scope.usuarios[i].foto;
                $scope.visibleBlog = $rootScope.usuarioLogueado.idRol == 12 && $scope.correo == $scope.usuarioLogueado.email;
                return $scope.usuarioActual = $scope.usuarios[i].nombre;
              }
            };
          }
        };
      }
      if($scope.correo != ''){
        if($rootScope.usuarioLogueado.idRol != 12 && $scope.usuarioActual == $scope.usuarioLogueado.nombre){
          //alert('el usuario no existe');
          $('#alertNoUsuario').removeClass('hidden');
          setTimeout(function() {
              $('#alertNoUsuario').addClass('hidden');
          }, 3000);
          $scope.visible = !$scope.visible;
          $('#tags').val('');
          return;
        }
        if($rootScope.usuarioLogueado.idRol != 12 && $scope.usuarioActual != $scope.usuarioLogueado.nombre){
          //alert('el usuario no existe');
          $('#alertNoUsuario').removeClass('hidden');
          setTimeout(function() {
              $('#alertNoUsuario').addClass('hidden');
          }, 3000);
          $('#tags').val('');
          return;
        }
        if($rootScope.usuarioLogueado.idRol == 12){
          //alert('el usuario no existe');
          $('#alertNoUsuario').removeClass('hidden');
          setTimeout(function() {
              $('#alertNoUsuario').addClass('hidden');
          }, 3000);
          $('#tags').val('');
          return;
        }
      }
    }
  }

  $scope.mostrarBlogsEstudiantes = function(index){
    $scope.visible = true;
    $scope.cambioBlog = false;
    $scope.mostrarUsuarioPorCorreo = $scope.publicaciones[index].autor;
    $scope.correo = $scope.publicaciones[index].autor;
    $scope.publicacionesUsuario = [];

    for (var i = 0; i < $scope.publicaciones.length; i++) {
      if($scope.publicaciones[i].autor == $scope.mostrarUsuarioPorCorreo){
        $scope.publicacionesUsuario.push($scope.publicaciones[i]);
      }
    };

    for (var i = 0; i < $scope.usuarios.length; i++) {
      if($scope.usuarios[i].email == $scope.mostrarUsuarioPorCorreo){
        $scope.usuarioActualFoto = $scope.usuarios[i].foto;
        $scope.visibleBlog = $rootScope.usuarioLogueado.idRol == 12 && $scope.correo == $scope.usuarioLogueado.email;
        return $scope.usuarioActual = $scope.usuarios[i].nombre;
      }
    };
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

    $scope.tituloPublicacion = '';
    $scope.contenidoPublicacion = '';
  };

  $scope.nuevoComentario = function(index) {

    $scope.descripcionComentario = $scope.agregarComentario;
    $scope.idEntradaBlog = $scope.publicacionesUsuario[index].idBlog;

    $http.post('phpConexion/blog/agregar_comentarios.php', {'descripcion': $scope.descripcionComentario, 'Blog_idBlog': $scope.idEntradaBlog}).success(function(data, status) {
      console.log("inserted good");
      $scope.algo = data;
      $scope.obtenerComentarios(index);
    }).error(function(data, status) {
        console.log("inserted wrong");
    });

    $scope.descripcionComentario = '';
    $scope.agregarComentario = '';
    $scope.idEntradaBlog = '';

    $('#myModal2').modal('hide');

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

  };

  $scope.noEditar = function(index) {
    $scope.publicacionesUsuario[index].tema = $scope.publicacionesUsuario[index][4];
    $scope.publicacionesUsuario[index].descripcionPublicacion = $scope.publicacionesUsuario[index][1];
  };

  $scope.recargarBlog = function() {
    $route.reload();
  };

  $scope.borrarCampos = function(index) {
    $scope.agregarComentario = '';
    $scope.tituloPublicacion = '';
    $scope.contenidoPublicacion = '';
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
      return "glyphicon glyphicon-star yellow";
    }else{
      return "glyphicon glyphicon-star stars";
    }
  };

});