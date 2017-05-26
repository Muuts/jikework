<?php
header('Content-Type: application/json; charset=utf-8');
header('X-XSS-Protection:1;mode=block');
require_once('db.php');
    /*PHP链接服务器方式
    第一个参数为服务器的地址
    第二个参数为用户名
    第三个参数为用户名的密码
    第四个参数为哪一个数据库
    第五个参数为端口号
    */
    //$link = mysql_connect("localhost","root","",'baidunews');
    session_start(); //启动新会话或者重用现有会话

    if($link){

      if($_SESSION['token'] == ''){
      //成功就输出
      $salt = "login*";
      $time = time();
      echo 'request success';

          //token生成
      $token = md5($salt . md5($time . $salt));

      //token存储在_SESSION中
      $_SESSION['token'] = $token;

     }else{
      $salt = "login*";
      $time = time();

     //token生成
     $token = md5($salt.md5($time.$salt));

     //token存储在_SESSION中
     $_SESSION['token'] = $token;

      //失败就输出
      //连接成功进入，并搜素服务器
             mysqli_select_db($link,"baidunews");

             //echo json_encode(array('链接信息'=>'连接成功'));

              //查询数据库全部
              $sql = "select * from news";

              //设置数据格式
             mysqli_query($link,"SET NAMES utf8");

             //返回查询结果
             $result =  mysqli_query($link,$sql);


             //声明一个数组，将查询到的行，push进入数组
             $semddate = array();

             //将查询结果依次输出
             //$row为查询结果的每一行
             while($row = mysqli_fetch_assoc($result)){
                 array_push($semddate, array(
                 "id"=>$row['id'],
                 "newstype"=>$row['newstype'],
                 "newstitle"=>$row['newstitle'],
                 "newsimg"=>$row['newsimg'],
                 "newstime"=>$row['newstime'],
                 "newssrc"=>$row['newssrc'],
                 'token'=>$token
                 ));
             };

             //输出json
             echo json_encode($semddate);
     }

    }


 mysqli_close($link);

?>