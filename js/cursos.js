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


function Mycurso($scope) {
     $scope.cursos = [
   {
        name: "Diseño Web 1",
        code: "Diseño Web 1"},
    {
        name: "Diseño visual digital 1",
        code: "Diseño visual digital 1"},
    {
        name: "Fundamentos de programación Web",
        code: "Fundamentos de programación Web"},
    {
        name: "Introducción a la tecnología de la información",
        code: "Introducción a la tecnología de la información"},
     {
        name: "Inglés para tecnologías de información 1",
        code: "Inglés para tecnologías de información 1"},
    {
        name: "Diseño Web 2",
        code: "Diseño Web 2"},
    {
        name: "Diseño visual digital 2",
        code: "Diseño visual digital 2"},
    {
        name: "Programación Web dinámica",
        code: "Programación Web dinámica"},
     {
        name: "Fundamentos de bases de datos",
        code: "Fundamentos de bases de datos"},
    {
        name: "Inglés para tecnologías de información 2",
        code: "Inglés para tecnologías de información 2"},
    {
        name: "Proyecto de desarrollo Web 1",
        code: "Proyecto de desarrollo Web 1"},
    {
        name: "Comunicación de información en la Web",
        code: "Comunicación de información en la Web"},
     {
        name: "Programación Web interactiva",
        code: "Programación Web interactiva"},
    {
        name: "Estructuras discretas",
        code: "Estructuras discretas"},
    {
        name: "Inglés para tecnologías de información 3",
        code: "Inglés para tecnologías de información 3"},
    {
        name: "Diseño de la experiencia del usuario",
        code: "Diseño de la experiencia del usuario"},
     {
        name: "Tecnologías avanzadas de diseño Web",
        code: "Tecnologías avanzadas de diseño Web"},
    {
        name: "Programación del lado del servidor",
        code: "Programación del lado del servidor"},
    {
        name: "Comunicación social en la Web",
        code: "Comunicación social en la Web"},
    {
        name: "Inglés para tecnologías de información 4",
        code: "Inglés para tecnologías de información 4"},
     {
        name: "Proyecto de desarrollo Web 2",
        code: "Proyecto de desarrollo Web 2"},
    {
        name: "Animación Web 2D",
        code: "Animación Web 2D"},
    {
        name: "Posicionamiento en la Web",
        code: "Posicionamiento en la Web"},
    {
        name: "Procesos empresariales",
        code: "Procesos empresariales"},
     {
        name: "Inglés para tecnologías de información 5",
        code: "Inglés para tecnologías de información 5"},
    {
        name: "Infraestructura de sistemas Web",
        code: "Infraestructura de sistemas Web"},
    {
        name: "Programación de aplicaciones móviles",
        code: "Programación de aplicaciones móviles"},
    {
        name: "Portafolio profesional",
        code: "Portafolio profesional"},
     {
        name: "Ética y profesionalismo",
        code: "Ética y profesionalismo"},
    {
        name: "Inglés para tecnologías de información 6",
        code: "Inglés para tecnologías de información 6"},
    ];
 
}
function Mycurso1($scope) {
    $scope.cursos1 = [
   {
        name: "Fundamentos de programación",
        code: "Fundamentos de programación"},
    {
        name: "Proyecto de ingeniería del software 1",
        code: "Proyecto de ingeniería del software 1"},
    {
        name: "Introducción a la tecnología de información",
        code: "Introducción a la tecnología de información"},
    {
        name: "Inglés para tecnologías de información 1",
        code: "Inglés para tecnologías de información 1"},
     {
        name: "Programación orientada a objetos",
        code: "Programación orientada a objetos"},
    {
        name: "Fundamentos de bases de datos",
        code: "Fundamentos de bases de datos"},
    {
        name: "Estructuras discretas",
        code: "Estructuras discretas"},
    {
        name: "Procesos empresariales",
        code: "Procesos empresariales"},
     {
        name: "Inglés para tecnologías de información 2",
        code: "Inglés para tecnologías de información 2"},
    {
        name: "Programación con patrones",
        code: "Programación con patrones"},
    {
        name: "Proyecto de ingeniería del software 2",
        code: "Proyecto de ingeniería del software 2"},
    {
        name: "Estructuras de datos",
        code: "Estructuras de datos"},
     {
        name: "Inglés para tecnologías de información 3",
        code: "Inglés para tecnologías de información 3"},
    {
        name: "Diseño conceptual de software",
        code: "Diseño conceptual de software"},
    {
        name: "Programación de bases de datos",
        code: "Programación de bases de datos"},
    {
        name: "Diseño y construcción de componentes",
        code: "Diseño y construcción de componentes"},
     {
        name: "Arquitectura de computadoras",
        code: "Arquitectura de computadoras"},
    {
        name: "Inglés para tecnologías de información 4",
        code: "Inglés para tecnologías de información 4"},
    {
        name: "Proyecto de ingeniería del software 3",
        code: "Proyecto de ingeniería del software 3"},
    {
        name: "Estructura de datos 2",
        code: "Estructura de datos 2"},
     {
        name: "Principios de sistemas operativos",
        code: "Principios de sistemas operativos"},
    {
        name: "Portafolio profesional",
        code: "Portafolio profesional"},
    {
        name: "Ética y profesionalismo",
        code: "Ética y profesionalismo"},
    {
        name: "Proyecto en empresa",
        code: "Proyecto en empresa"},
     {
        name: "Ingeniería de requerimientos",
        code: "Ingeniería de requerimientos"},
    {
        name: "Diseño de la interacción humano-computadora",
        code: "Diseño de la interacción humano-computadora"},
    {
        name: "Redes de computadoras",
        code: "Redes de computadoras"},
    {
        name: "Cálculo diferencial e integral",
        code: "Cálculo diferencial e integral"},
     {
        name: "Probabilidad y estadística",
        code: "Probabilidad y estadística"},
    {
        name: "Procesos de ingeniería del software",
        code: "Procesos de ingeniería del software"},
     {
        name: "Calidad, verificación y validación de software",
        code: "Calidad, verificación y validación de software"},
     {
        name: "Sociedad y tecnologías de información y comunicación",
        code: "Sociedad y tecnologías de información y comunicación"},
    {
        name: "Álgebra lineal",
        code: "Álgebra lineal"},
    {
        name: "Física 1",
        code: "Física 1"},
    {
        name: "Proyecto de ingeniería del software 4",
        code: "Proyecto de ingeniería del software 4"},
     {
        name: "Sistemas colaborativos",
        code: "Sistemas colaborativos"},
    {
        name: "Probabilidad y estadística 2",
        code: "Probabilidad y estadística 2"},
    {
        name: "Física 2",
        code: "Física 2"},
    ];

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
    {
        name: "Sistemas operativos 2",
        code: "Sistemas operativos 2"},
    {
        name: "Tecnología telemática 3",
        code: "Tecnología telemática 3"},
     {
        name: "Fundamentos de bases de datos",
        code: "Fundamentos de bases de datos"},
    {
        name: "Ofimática",
        code: "Ofimática"},
    {
        name: "Inglés para tecnologías de información 3",
        code: "Inglés para tecnologías de información 3"},
    {
        name: "Arquitectura de computadoras",
        code: "Arquitectura de computadoras"},
     {
        name: "Proyecto de integración de tecnologías 1",
        code: "Proyecto de integración de tecnologías 1"},
    {
        name: "Tecnología telemática 4",
        code: "Tecnología telemática 4"},
    {
        name: "Administración de bases de datos 1",
        code: "Administración de bases de datos 1"},
    {
        name: "Inglés para tecnologías de información 4",
        code: "Inglés para tecnologías de información 4"},
     {
        name: "Sistemas operativos 3",
        code: "Sistemas operativos 3"},
    {
        name: "Proyecto de integración de tecnologías 2",
        code: "Proyecto de integración de tecnologías 2"},
    {
        name: "Administración de bases de datos 2",
        code: "Administración de bases de datos 2"},
    {
        name: "Proyecto web 1",
        code: "Proyecto web 1"},
     {
        name: "Estructuras discretas",
        code: "Estructuras discretas"},
    {
        name: "Proyecto de integración de tecnologías 3",
        code: "Proyecto de integración de tecnologías 3"},
    {
        name: "Proyecto web 2",
        code: "Proyecto web 2"},
    {
        name: "Procesos empresariales",
        code: "Procesos empresariales"},
     {
        name: "Probabilidad y estadística 1",
        code: "Probabilidad y estadística 1"},
    {
        name: "Ética y profesionalismo",
        code: "Ética y profesionalismo"},
     {
        name: "Seguridad informática",
        code: "Seguridad informática"},
     {
        name: "Derecho informático",
        code: "Derecho informático"},
    {
        name: "Administración de proyectos 1",
        code: "Administración de proyectos 1"},
    {
        name: "Sociedad y TIC",
        code: "Sociedad y TIC"},
    {
        name: "Cálculo diferencial e integral",
        code: "Cálculo diferencial e integral"},
     {
        name: "Proyecto de integración de tecnologías 4",
        code: "Proyecto de integración de tecnologías 4"},
    {
        name: "Administración de servicios informáticos",
        code: "Administración de servicios informáticos"},
    {
        name: "Administración de proyectos 2",
        code: "Administración de proyectos 2"},
    {
        name: "Física 1",
        code: "Física 1"},
    {
        name: "Álgebra lineal",
        code: "Álgebra lineal"},
    {
        name: "Arquitectura tecnológica",
        code: "Arquitectura tecnológica"},
    {
        name: "Aseguramiento de la continuidad del negocio",
        code: "Aseguramiento de la continuidad del negocio"},
    {
        name: "Probabilidad y estadística 2",
        code: "Probabilidad y estadística 2"},
    {
        name: "Física 2",
        code: "Física 2"},
    ];
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
     {
        name: "Estructuras discretas",
        code: "Estructuras discretas"},
    {
        name: "Inglés para tecnologías de información 2",
        code: "Inglés para tecnologías de información 2"},
    {
        name: "Tecnología de redes 3",
        code: "Tecnología de redes 3"},
    {
        name: "Infraestructura de fibra óptica",
        code: "Infraestructura de fibra óptica"},
     {
        name: "Sistemas operativos 1",
        code: "Sistemas operativos 1"},
    {
        name: "Fundamentos de bases de datos",
        code: "Fundamentos de bases de datos"},
    {
        name: "Inglés para tecnologías de información 3",
        code: "Inglés para tecnologías de información 3"},
    {
        name: "Tecnología de redes 4",
        code: "Tecnología de redes 4"},
     {
        name: "Diseño de centros de datos e infraestructura de redes",
        code: "Diseño de centros de datos e infraestructura de redes"},
    {
        name: "Sistemas operativos 2",
        code: "Sistemas operativos 2"},
    {
        name: "Procesos empresariales",
        code: "Procesos empresariales"},
    {
        name: "Inglés para tecnologías de información 4",
        code: "Inglés para tecnologías de información 4"},
     {
        name: "Proyecto de integración de tecnologías 1",
        code: "Proyecto de integración de tecnologías 1"},
    {
        name: "Convergencia de voz y datos",
        code: "Convergencia de voz y datos"},
    {
        name: "Redes inalámbricas",
        code: "Redes inalámbricas"},
    {
        name: "Seguridad en las redes",
        code: "Seguridad en las redes"},
     {
        name: "Servicio al cliente",
        code: "Servicio al cliente"},
    {
        name: "Factor humano",
        code: "Factor humano"},
    {
        name: "Inglés para tecnologías de información 5 (Curso optativo)",
        code: "Inglés para tecnologías de información 5 (Curso optativo)"},
    {
        name: "Proyecto de diseño de redes empresariales",
        code: "Proyecto de diseño de redes empresariales"},
     {
        name: "Administración de redes",
        code: "Administración de redes"},
    {
        name: "Análisis y diagnóstico de redes",
        code: "Análisis y diagnóstico de redes"},
     {
        name: "Probabilidad y estadísitca 1",
        code: "Probabilidad y estadísitca 1"},
     {
        name: "Ética y profesionalismo",
        code: "Ética y profesionalismo"},
    {
        name: "Inglés para tecnologías de información 6 (Curso optativo)",
        code: "Inglés para tecnologías de información 6 (Curso optativo)"},
   
    ];
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
    {
        name: "Seguridad de aplicaciones y sistemas",
        code: "Seguridad de aplicaciones y sistemas"},
    {
        name: "Seguridad de datos almacenados",
        code: "Seguridad de datos almacenados"},
     {
        name: "Análisis y detección de vulnerabilidades",
        code: "Análisis y detección de vulnerabilidades"},
    {
        name: "Continuidad del negocio y recuperación de desastres",
        code: "Continuidad del negocio y recuperación de desastres"},
    {
        name: "Análisis y evaluación de riesgos de seguridad",
        code: "Análisis y evaluación de riesgos de seguridad"},
    {
        name: "Proyecto de investigación aplicada 1",
        code: "Proyecto de investigación aplicada 1"},
     {
        name: "Electiva",
        code: "Electiva"},
    {
        name: "Arquitectura y diseño de seguridad",
        code: "Arquitectura y diseño de seguridad"},
    {
        name: "Administración del sistema de gestión de seguridad de la información",
        code: "Administración del sistema de gestión de seguridad de la información"},
    {
        name: "Proyecto de investigación aplicada 2",
        code: "Proyecto de investigación aplicada 2"},
   ];
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
     {
        name: "Bases de datos multidimensionalestos culturales, éticos, legales y regulatorios",
        code: "Bases de datos multidimensionales"},
    {
        name: "Seguridad de bases de datos",
        code: "Seguridad de bases de datos"},
    {
        name: "Minería de datos 1",
        code: "Minería de datos 1"},
    {
        name: "Depósitos de datos avanzados",
        code: "Depósitos de datos avanzados"},
     {
        name: "Arquitectura de bases de datos en ambientes distribuidos",
        code: "Arquitectura de bases de datos en ambientes distribuidos"},
    {
        name: "Buenas prácticas en ambientes de bases de datos",
        code: "Buenas prácticas en ambientes de bases de datos"},
    {
        name: "Proyecto de investigación aplicada 1",
        code: "Proyecto de investigación aplicada 1"},
    {
        name: "Analítica empresarial",
        code: "Analítica empresarial"},
     {
        name: "Proyecto de investigación aplicada 2",
        code: "Proyecto de investigación aplicada 2"},
   
   ];
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
}
function eliminar(){
    
}