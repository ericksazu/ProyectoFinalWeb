<?php

include_once "../conexion.php";
include_once "../funciones/usuariosFunciones.php";

$id = $_POST['idUsuario'];

  if( isset ($_POST["submit"] ) ){
              
      $file_name = $_FILES["foto"]["name"];
      $tmp_name = $_FILES["foto"]["tmp_name"];
      $folder = "fotos_subidas";
      $destination =  $folder."/".$file_name;
      $file_info = pathinfo( $file_name) ;
      $extension =  $file_info['extension'] ;
                 
        if($_FILES["foto"]["size"] /1024 < 1024){
            
            if( $extension == "jpg" || $extension == "gif" || $extension == "jpeg" || $extension == "png" )
            {
                if(!is_dir ( $folder ) )
                {
                    if( mkdir( $folder ) )
                    {
                        if( move_uploaded_file( $tmp_name , $destination ) )
                        {
                            echo "La foto se subio con exito!";
                            header("Location: ../../#/secciones");
                                
                        }   // close move_uploaded_file( $tmp_name , $destination )
                        else
                        {
                            echo "La foto no se pudo mover!";
                        }
                    } // close mkdir( $folder )
                    else
                    {
                        echo " El folder no fue creado!";
                                }       
                }// close !is_dir ( $folder ) 
                else if( move_uploaded_file( $tmp_name , $destination ) )
                  {
                    header("Location: ../../#/secciones");
                  }
            }
            else  // close $extension == "jpg" || $extension == "gif" || $extension == "jpeg" || $extension == "png"
              {
                echo "Solo se cargarn archivos jpg , gif , jpeg , png";
              }
          } // close $_FILES["upload"]["size"] /1024 < 1024
        else
        {
          echo "La foto no se puede cargar es muy pesada";
        }
}//close isset ($_POST["submit"]

mysqli_query($conexion,"UPDATE Usuario SET foto='$destination' WHERE idUsuario='$id'");


?>