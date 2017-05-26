<?php
 header('Content-Type: application/json; charset=utf-8');

    //$link = mysql_connect("localhost","root","");

    require_once('db.php');
    session_start();
    if($link){
        foreach($_POST as $key => $value){
                    $_POST[$key]=addslashes(htmlspecialchars($value));
        };

         if ($_SESSION["token"] == $_POST['token']) {

            $salt = "login*";
            $time = time();
            //token生成
            $token = md5($salt . md5($time . $salt));
            //token存储在_SESSION中
            $_SESSION["token"] = $token;

             mysqli_select_db($link,'baidunews');
            /*插入新闻*/
            $newstitle = $_POST['newstitle'];
            $newstype = $_POST['newstype'];
            $newsimg = $_POST['newsimg'];
            $newstime = $_POST['newstime'];
            $newssrc = $_POST['newssrc'];
            $id = $_POST['id'];
            $sql = "UPDATE `news` SET `newstype`='{$newstype}',`newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`= {$id}";
            mysqli_query($link,"SET NAMES utf8");

            $result = mysqli_query($link,$sql);


            echo json_encode(array("result"=>"ok",'token'=>$token));
         }

    }

     mysqli_close($link);

?>