angular.module('module').controller('infousuarioController', function($scope, $rootScope) {


    var cambioRol = " ";
    switch ($rootScope.usuarioLogueado.idRol) {
        case "12":
            cambioRol = 'Estudiante'
            break;
        case "13":
            cambioRol = 'Profesor'
            break;
        case "14":
            cambioRol = 'Administrador'
            break;
    }

    var popover = $('#profilePic'),
        options = {
            trigger: 'click',
            html: 'true',
            title: "Perfil",
            content: "<figure class='pull-left center-block' id='circle'><img src='phpConexion/login/" + $rootScope.usuarioLogueado.foto + "' alt='Foto usuario' class='img-circle' id='fotoperfil'><a data-toggle='modal' data-target='#cambiarfoto'><p class='actu'> Actualizar foto</p></a></figure><div class='pull-right datos'><h5 class='nombre3'>" + $rootScope.usuarioLogueado.nombre + " " + $rootScope.usuarioLogueado.primerApellido + "</h5><p class='rol'>" + cambioRol + "</p><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><a data-toggle='modal' data-target='#cambiarcontrasena'><h5 class='nombre2'>¿Quiere cambiar la contraseña?</h5></a></div>"
        }

    $(popover).popover(options);

    $('body').on('click', function(e) {

        if (!$(event.target).closest('#profilePic').length) {
            $('#profilePic').popover('hide');

        } else if ($(event.target).closest('.popover').length) {
            $('#profilePic').popover('show');
        }
        $('#profilePic').load();

    });

$(".salir").on('click', function(){
  location.reload(true);

}); 

$(":file").filestyle({buttonText: "Cambiar foto"});


});


