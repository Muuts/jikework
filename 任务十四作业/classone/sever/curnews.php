<?php
    header('Content-Type: application/json; charset=utf-8');
   // $link = mysql_connect("localhost","root","");
    require_once('db.php');
     if($link){
        $newsid = $_GET['nenwsid'];

         mysqli_select_db($link,'baidunews');

        $sql = "select * from `news` WHERE `id`= {$newsid}";

        mysqli_query($link,"SET NAMES utf8");

        $result = mysqli_query($link,$sql);

        //声明一个数组，将查询到的行，push进入数组
         $semddate = array();

         //将查询结果依次输出
         //$row为查询结果的每一行
         while($row = mysqli_fetch_assoc($result)){
             array_push($semddate, array(
             "id"=>htmlspecialchars_decode($row['id']),
             "newstype"=>htmlspecialchars_decode($row['newstype']),
             "newstitle"=>htmlspecialchars_decode($row['newstitle']),
             "newsimg"=>htmlspecialchars_decode($row['newsimg']),
             "newstime"=>htmlspecialchars_decode($row['newstime']),
             "newssrc"=>htmlspecialchars_decode($row['newssrc']),
             ));
         };

         //输出json
         echo json_encode($semddate);


        //echo json_encode(array("result"=>"ok"));
     }
 mysqli_close($link);

?>