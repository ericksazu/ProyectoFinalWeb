<?php

include_once "../conexion.php";
include_once "../funciones/usuariosFunciones.php";

$id = $_POST['idUsuario'];

  if( isset ($_POST["submit"] ) ){
              
      $file_name = $_FILES["foto"]["name"];
      $tmp_name = $_FILES["foto"]["tmp_name"];
      $folder = "upload_files";
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
                            echo "file uploaded !!!!";
                            // mysqli_query($conexion,"UPDATE Usuario SET foto='$destination' WHERE idUsuario=3");
                            header("Location: ../../#/secciones");
                                
                        }   // close move_uploaded_file( $tmp_name , $destination )
                        else
                        {
                            echo "file not moved !!!";
                        }
                    } // close mkdir( $folder )
                    else
                    {
                        echo " folder not created!!!!";
                                }       
                }// close !is_dir ( $folder ) 
                else if( move_uploaded_file( $tmp_name , $destination ) )
                  {
                    // echo "file uploadededededed !!!!";
                    // mysqli_query($conexion,"UPDATE Usuario SET foto='$destination' WHERE idUsuario=3");
                    header("Location: ../../#/secciones");
                                
                  }
            }
            else  // close $extension == "jpg" || $extension == "gif" || $extension == "jpeg" || $extension == "png"
              {
                echo "only upload jpg , gif , jpeg , png";
              }
          } // close $_FILES["upload"]["size"] /1024 < 1024
        else
        {
          echo "file can't be uploaded file size to big";
        }
}//close isset ($_POST["submit"]

mysqli_query($conexion,"UPDATE Usuario SET foto='$destination' WHERE idUsuario='$id'");


?>