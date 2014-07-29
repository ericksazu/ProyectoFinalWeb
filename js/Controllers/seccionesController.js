angular.module('module').controller('seccionesController', function($scope, $rootScope) {
    var popover = $('#profilePic'),
        options = {
            trigger: 'click',
            html: 'true',
            title: "Perfil",
            content: "<figure class='pull-left center-block' id='circle'><img src='" + $rootScope.usuarioLogueado.img + "' alt='Foto usuario' class='img-circle' id='fotoperfil'><figcaption><a>Actualizar foto</a><input class='photos' type='file' name='photos[]'></figcaption></figure><div class='pull-right datos'><h5 class='nombre'>" + $rootScope.usuarioLogueado.nombre + "</h5><p class='carrera'>Diseño Web</p><p class='rol'>" + $rootScope.usuarioLogueado.rol + "</p><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span><span class='glyphicon glyphicon-star yellow'></span></div>"
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