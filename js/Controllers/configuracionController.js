angular.module('module').controller('FormCtrl', function($scope, $http, $rootScope) {

var formData = {
        firstname: "default",
        lastfirstName: "default",
        lastsecondName: "default",
        email: "default",
        nivel:"default",
        rol:"default",
        carrera:" default",
};
      
$scope.save = function() {
        formData = $scope.form;
        //console.log (formData);
}
$scope.submitForm = function() {
    //console.log("posting data....");
    alert('Usuario Creado');
    //$http.post('form.php', JSON.stringify(data)).success(function(){/*success callback*/});

    formData = $scope.form;
    var json_str = JSON.stringify(formData);
    console.log(json_str);
};


});
$('#confirm-delete').on('show.bs.modal', function(e) {
$(this).find('.danger').attr('href', $(e.relatedTarget).data('href'));
$('.debug-url').html('Delete URL: <strong>' + $(this).find('.danger').attr('href') + '</strong>');
});

