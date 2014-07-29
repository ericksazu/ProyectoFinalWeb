var popover = $('#profilePic'),
    options = {
        trigger: 'click',
        html: 'true',
        title: "Editar perfil",
        content: ""
    }

$(popover).popover(options);

$('body').on('click', '.btn-close', function() {
    $(popover).popover('hide');
});