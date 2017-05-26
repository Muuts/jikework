<?php
    header('Content-Type: application/json; charset=utf-8');
    //$link = mysql_connect("localhost","root","");
    require_once('db.php');
    session_start();
     if($link){
      if ($_SESSION["token"] == $_POST['token']) {
            $salt = "login*";

            $time = time();
            //token生成
            $token = md5($salt . md5($time . $salt));
            //token存储在_SESSION中
            $_SESSION["token"] = $token;

             $newsid = $_POST['nenwsid'];

               mysqli_select_db($link,'baidunews');

              $sql = "DELETE FROM `news` WHERE `id`= {$newsid}";

              mysqli_query($link,"SET NAMES utf8");

              $result = mysqli_query($link,$sql);

              echo json_encode(array("result"=>"ok",'token'=>$token));
      }

     }
 mysqli_close($link);
?>