 function MyNivel($scope) {
    $scope.niveles = [
        {
        name: "Técnico",
        code: "Técnico"},
    {
        name: "Diplomado",
        code: "Diplomado"},
    {
        name: "Bachillerato",
        code: "Bachillerato"},
    {
        name: "Maestria",
        code: "Maestria"},
    ];
}

function MyRol($scope) {
    $scope.roles = [
        {
        name: "Rector",
        code: "Rector"},
    {
        name: "Director de Carrera",
        code: "Director de Carrera"},
    {
        name: "Profesor",
        code: "Profesor"},
    {
        name: "Estudiante",
        code: "Estudiante"},
    ];
}
function Mycarrera($scope) {
var Web = $("#Web").css("display", "none");
var sofware = $("#sofware").css("display", "none");
var Tecnologias = $("#Tecnologias").css("display", "none");
var Telematica = $("#Telematica ").css("display", "none");
var Ciberseguridad =  $("#Ciberseguridad").css("display", "none");
var curso1 = $("#Datos").css("display", "none");
var ingles =  $("#ingles").css("display", "none");

$scope.carreras = [
        {
        name: "Diseño Web",
        code: "Diseño Web"},
    {
        name: "Desarrollo de Sofware",
        code: "Desarrollo de Sofware"},
    {
        name: "Integración de Tecnologías",
        code: "Integración de Tecnologías"},
    {
        name: "Télematica",
        code: "Télematica"},
    {
        name: "Ciberseguridad",
        code: "Ciberseguridad"},
    {
        name: "Tecnología de Base de Datos",
        code: "Tecnología de Base de Datos"},
    {
        name: "Inglés",
        code: "Inglés"},
    ];
$scope.optionChanged = function(){
    if(this.form.carrera == "Télematica"){
        Telematica.css("display", "block");
    }else{
        if(this.form.carrera == "Diseño Web"){
         Web.css("display", "block");   
        }else{
            if(this.form.carrera == "Desarrollo de Sofware"){
                sofware .css("display", "block");
            }else{
                if (this.form.carrera == "Integración de Tecnologías"){
                    Tecnologias.css("display", "block");
                }else{
                    if (this.form.carrera == "Ciberseguridad"){;
                        Ciberseguridad.css("display", "block");
                    }else{
                        if(this.form.carrera == "Tecnología de Base de Datos"){
                            curso1.css("display","block");
                        }else{
                            if(this.form.carrera == "Inglés" ){
                                ingles.css("display","block");
                            }
                        }
                    }
                }
            }
        }
    }
  }
}

function Mycurso($scope){
     $scope.cursos = [
   {
        name: "Diseño Web 1",
        code: "Diseño Web 1",
        checked: false},
    {
        name: "Diseño visual digital 1",
        code: "Diseño visual digital 1",
        checked: false},
    {
        name: "Fundamentos de programación Web",
        code: "Fundamentos de programación Web",
        checked: false},
    {
        name: "Introducción a la tecnología de la información",
        code: "Introducción a la tecnología de la información",
        checked: false},
     {
        name: "Inglés para tecnologías de información 1",
        code: "Inglés para tecnologías de información 1",
        checked: false},
    {
        name: "Diseño Web 2",
        code: "Diseño Web 2",
        checked: false},
    {
        name: "Diseño visual digital 2",
        code: "Diseño visual digital 2",
        checked: false},
    {
        name: "Programación Web dinámica",
        code: "Programación Web dinámica",
        checked: false},
     {
        name: "Fundamentos de bases de datos",
        code: "Fundamentos de bases de datos",
        checked: false},
    ];

$scope.selection=[];
$scope.toggleSelection = function toggleSelection(index) {

$scope.cursos[index].checked = !$scope.cursos[index].checked;

};

};

function Mycurso1($scope) {
    $scope.cursos1 = [
   {
        name: "Fundamentos de programación",
        code: "Fundamentos de programación",
        checked: false},
    {
        name: "Proyecto de ingeniería del software 1",
        code: "Proyecto de ingeniería del software 1",
        checked: false},
    {
        name: "Introducción a la tecnología de información",
        code: "Introducción a la tecnología de información",
        checked: false},
    {
        name: "Inglés para tecnologías de información 1",
        code: "Inglés para tecnologías de información 1",
        checked: false},
     {
        name: "Programación orientada a objetos",
        code: "Programación orientada a objetos",
        checked: false},
    {
        name: "Fundamentos de bases de datos",
        code: "Fundamentos de bases de datos",
        checked: false},
    {
        name: "Estructuras discretas",
        code: "Estructuras discretas",
        checked: false},
    {
        name: "Procesos empresariales",
        code: "Procesos empresariales",
        checked: false},
     {
        name: "Inglés para tecnologías de información 2",
        code: "Inglés para tecnologías de información 2",
        checked: false},
    {
        name: "Programación con patrones",
        code: "Programación con patrones",
        checked: false},
    {
        name: "Proyecto de ingeniería del software 2",
        code: "Proyecto de ingeniería del software 2",
        checked: false},
    ];
$scope.selection=[];
$scope.toggleSelection = function toggleSelection(index) {

$scope.cursos1[index].checked = !$scope.cursos1[index].checked;

};
}
 

function Mycurso2($scope) {
    $scope.cursos2 = [
   {
        name: "Introducción a la tecnología de información",
        code: "Introducción a la tecnología de información"},
    {
        name: "Laboratorio de tecnologías 1",
        code: "Laboratorio de tecnologías 1"},
    {
        name: "Tecnología telemática 1",
        code: "Tecnología telemática 1"},
    {
        name: "Fundamentos de programación",
        code: "Fundamentos de programación"},
     {
        name: "Inglés para tecnologías de información",
        code: "Inglés para tecnologías de información"},
    {
        name: "Laboratorio de tecnologías 2",
        code: "Laboratorio de tecnologías 2"},
    {
        name: "Sistemas operativos 1",
        code: "Sistemas operativos 1"},
    {
        name: "Tecnología telemática 2",
        code: "Tecnología telemática 2"},
     {
        name: "Programación y estructura de datos",
        code: "Programación y estructura de datos"},
    {
        name: "Inglés para tecnologías de información 2",
        code: "Inglés para tecnologías de información 2"},
    ];
    $scope.selection=[];
    $scope.toggleSelection = function toggleSelection(index) {

   $scope.cursos2[index].checked = !$scope.cursos2[index].checked;

};
}
function Mycurso3($scope) {
    $scope.cursos3 = [
   {
        name: "Tecnología de redes 1",
        code: "Tecnología de redes 1"},
    {
        name: "Tecnología de comunicaciones y cableado",
        code: "Tecnología de comunicaciones y cableado"},
    {
        name: "Introducción a la tecnología de información",
        code: "Introducción a la tecnología de información"},
    {
        name: "Introducción a la tecnología de información",
        code: "Introducción a la tecnología de información"},
     {
        name: "Inglés para tecnologías de información 1",
        code: "Inglés para tecnologías de información 1"},
    {
        name: "Tecnología de redes 2",
        code: "Tecnología de redes 2"},
    {
        name: "Fundamentos de fibra óptica",
        code: "Fundamentos de fibra óptica"},
    {
        name: "Fundamentos de programación",
        code: "Fundamentos de programación"},
    ];
    $scope.selection=[];
    $scope.toggleSelection = function toggleSelection(index) {

   $scope.cursos3[index].checked = !$scope.cursos3[index].checked;

};
}

function Mycurso4($scope) {
    $scope.cursos4 = [
   {
        name: "Introducción a la seguridad de la información",
        code: "Introducción a la seguridad de la información"},
    {
        name: "Principios de criptografía",
        code: "Principios de criptografía"},
    {
        name: "Tecnología de redes y telecomunicaciones seguras",
        code: "Tecnología de redes y telecomunicaciones seguras"},
    {
        name: "Métodos de investigación aplicada",
        code: "Métodos de investigación aplicada"},
     {
        name: "Control de acceso, seguridad ambiental y física",
        code: "Control de acceso, seguridad ambiental y física"},
    {
        name: "Criptografía aplicada",
        code: "Criptografía aplicada"},
    {
        name: "Seguridad en redes inalámbricas y dispositivos móviles",
        code: "Seguridad en redes inalámbricas y dispositivos móviles"},
    {
        name: "Seguridad en sistemas operativos",
        code: "Seguridad en sistemas operativos"},
     {
        name: "Aspectos culturales, éticos, legales y regulatorios",
        code: "Aspectos culturales, éticos, legales y regulatorios"},
    {
        name: "Seguridad y protocolos de comunicación",
        code: "Seguridad y protocolos de comunicación"},
    ];
  $scope.selection=[];
  $scope.toggleSelection = function toggleSelection(index) {

   $scope.cursos4[index].checked = !$scope.cursos4[index].checked;

};
}

function Mycurso5($scope) {
    $scope.cursos5 = [
   {
        name: "Programación avanzada en SQL",
        code: "Programación avanzada en SQL"},
    {
        name: "Bases de datos relacionales-objeto",
        code: "Bases de datos relacionales-objeto"},
    {
        name: "Administración de proyectos",
        code: "Administración de proyectos"},
    {
        name: "Administración de bases de datosa",
        code: "Administración de bases de datos"},
     {
        name: "Diseño y calidad de datos",
        code: "Diseño y calidad de datos"},
    {
        name: "Depósitos de datos",
        code: "Depósitos de datos"},
    {
        name: "Gobernanza de la información",
        code: "Gobernanza de la información"},
    {
        name: "Afinamiento y rendimiento de bases de datos",
        code: "Afinamiento y rendimiento de bases de datos"},
    ];
    $scope.selection=[];
    $scope.toggleSelection = function toggleSelection(index) {

   $scope.cursos5[index].checked = !$scope.cursos5[index].checked;

};
}
function Mycurso6($scope) {
    $scope.cursos6 = [
   {
        name: "Intermediate English 1",
        code: "Intermediate English 1"},
    {
        name: "Introduction to Service Centers",
        code: "Introduction to Service Centers"},
    {
        name: "Office Automation",
        code: "Office Automation"},
    {
        name: "Intermediate English 2",
        code: "Intermediate English 2"},
     {
        name: "Oral Communication Techniques",
        code: "Oral Communication Techniques"},
    {
        name: "Advanced English",
        code: "Advanced English"},
    {
        name: "Cross-cultural diversity",
        code: "Cross-cultural diversity"},
    {
        name: "Human Factor",
        code: "Human Factor"},
     {
        name: "Customer Service and Troubleshooting",
        code: "Customer Service and Troubleshooting"},
    {
        name: "Professional Ethics Workshop",
        code: "Professional Ethics Workshop"},
    {
        name: "TOEIC Preparation Workshop",
        code: "TOEIC Preparation Workshop"},
    ];
    $scope.selection=[];
    $scope.toggleSelection = function toggleSelection(index) {

    $scope.cursos6[index].checked = !$scope.cursos6[index].checked;
        
    };
   
}

