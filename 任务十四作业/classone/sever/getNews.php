<?php
    header('Content-Type: application/json; charset=utf-8; X-XSS-Protection:1;mode=block');

    /*PHP链接服务器方式
    第一个参数为服务器的地址
    第二个参数为用户名
    第三个参数为用户名的密码
    第四个参数为哪一个数据库
    第五个参数为端口号
    */
    //$link = mysql_connect("localhost","root","",'baidunews');


   require_once('db.php');
    if(!$link){
         echo json_encode(array('链接信息'=>'连接失败'));

    }else{
            $newstype = $_GET['newstype'];

           if($newstype){


                 //连接成功进入，并搜素服务器
                 mysqli_select_db($link,"baidunews");

                 //echo json_encode(array('链接信息'=>'连接成功'));

                  //设置数据格式
                 mysqli_query($link,"SET NAMES utf8");

                 //查询数据库全部
                 $sql = "select * from news  WHERE `newstype`='{$newstype}'";


                 //返回查询结果
                 $result =  mysqli_query($link,$sql);


                 //声明一个数组，将查询到的行，push进入数组
                 $semddate = array();

                 //将查询结果依次输出
                 //$row为查询结果的每一行
                 while ($row = mysqli_fetch_assoc($result)){

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

            }else{

            $link = mysqli_connect("localhost","root","",'baidunews');

        }

    }

  /*  $arr = array(
    'new'=>'百家',
    'newsimg'=>'img/1set.jpg',
    'newstime'=>'2016-02-28',
    'newssrc'=>'极客学院',
    'newstitle'=>'动态测试添加'
    );*/
    //echo json_encode($arr);
    mysqli_close($link);
?>