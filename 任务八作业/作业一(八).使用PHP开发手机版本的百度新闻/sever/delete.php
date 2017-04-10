<?php
    header('Content-Type: application/json; charset=utf-8');
    //$link = mysql_connect("localhost","root","");
    require_once('db.php');
     if($link){
        $newsid = $_POST['nenwsid'];

         mysql_select_db('baidunews',$link);

        $sql = "DELETE FROM `news` WHERE `id`= {$newsid}";

        mysql_query("SET NAMES utf8");

        $result = mysql_query($sql,$link);

        echo json_encode(array("result"=>"ok"));
     }
 mysql_close($link);
?>