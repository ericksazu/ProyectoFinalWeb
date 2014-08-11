angular.module('module').controller('seccionesController', function($scope, $rootScope) {
    var popover = $('#profilePic'),
        options = {
            trigger: 'click',
            html: 'true',
            title: "Perfil",
            content: "<figure class='pull-left center-block' id='circle'><img src='" + $rootScope.usuarioLogueado.foto + "' alt='Foto usuario' class='img-circle' id='fotoperfil'><figcaption><a>Actualizar foto</a><input class='photos' type='file' name='photos[]'></figcaption></figure><div class='pull-right datos'><h5 class='nombre'>" + $rootScope.usuarioLogueado.nombre + " " + $rootScope.usuarioLogueado.primerApellido + "</h5><p class='carrera'>Aqui va la carrera</p><p class='rol'>" + $rootScope.usuarioLogueado.idRol + "</p><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><a data-toggle='modal' data-target='#cambiarcontrasena'><h5 class='nombre'>¿Quiere cambiar la contraseña?</h5></a></div>"
        }

    $(popover).popover(options);

$('body').on('click', function(e) {
    
        if (!$(event.target).closest('#profilePic').length) {
            $('#profilePic').popover('hide');

        } else if ($(event.target).closest('.popover').length) {
            $('#profilePic').popover('show');
        }

    });

});