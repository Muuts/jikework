<?php
    header('Content-Type: application/json; charset=utf-8');
    $link = mysql_connect("localhost","root","");
    //require_once('db.php');
     if($link){
        $newsid = $_GET['nenwsid'];

         mysql_select_db('baidunews',$link);

        $sql = "select * from `news` WHERE `id`= {$newsid}";

        mysql_query("SET NAMES utf8");

        $result = mysql_query($sql,$link);

        //声明一个数组，将查询到的行，push进入数组
         $semddate = array();

         //将查询结果依次输出
         //$row为查询结果的每一行
         while($row = mysql_fetch_array($result)){
             array_push($semddate, array(
             "id"=>$row['id'],
             "newstype"=>$row['newstype'],
             "newstitle"=>$row['newstitle'],
             "newsimg"=>$row['newsimg'],
             "newstime"=>$row['newstime'],
             "newssrc"=>$row['newssrc'],
             ));
         };

         //输出json
         echo json_encode($semddate);


        //echo json_encode(array("result"=>"ok"));
     }
 mysql_close($link);

?>