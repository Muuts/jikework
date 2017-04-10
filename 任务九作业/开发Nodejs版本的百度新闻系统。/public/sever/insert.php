<?php
    header('Content-Type: application/json; charset=utf-8');
    //$link = mysql_connect("localhost","root","");

   require_once('db.php');

    if($link){

         mysql_select_db('baidunews',$link);
        /*插入新闻*/
        $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newstime = $_POST['newstime'];
        $newssrc = $_POST['newssrc'];

        $sql = "INSERT INTO `news`( `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')" ;

        mysql_query("SET NAMES utf8");

        $result = mysql_query($sql,$link);

        echo json_encode(array("result"=>"ok"));
    }

     mysql_close($link);
?>