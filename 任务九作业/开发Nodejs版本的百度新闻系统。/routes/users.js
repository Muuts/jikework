var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createPool({
  host:'localhost',
  port:3306,
  user:'root',
  password:'',
  database:'baidunews'
});

/* 后台文件 */
//获取 所有新闻列表
router.get('/survery', function(req, res, next) {
  connection.query('SELECT * FROM `news`',function (err, rows) {
    res.json(rows);
  })
});

//确认更新
router.post('/update',function (req, res) {
  var newsid = req.body.id,
      newstype = req.body.newstype,
      newstitle = req.body.newstitle,
      newsimg = req.body.newsimg,
      newstime = req.body.newstime,
      newssrc = req.body.newssrc;
  //console.log(newssrc);
      connection.query("UPDATE `news` SET `newstype`=?,`newstitle`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`= ?",[newstype,newstitle,newsimg,newstime,newssrc,newsid],function (err,rows) {
      console.log(rows.changedRows);
        res.json("");
  })
});

//motaikuang
router.get('/curnews',function (req,res) {
  var newsid = req.query.nenwsid;
  connection.query('SELECT * FROM `news` WHERE id=?',[newsid],function (err, rows) {
    //console.log(rows);
    res.json(rows);
    //res.json("");
  })
});

//删除
router.post('/delete',function (req, res) {
  var newsid = req.body.nenwsid;
  connection.query("DELETE FROM `news` WHERE `id`= ?",[newsid],function (err, result) {
    console.log(result.affectedRows);
    res.json("");
  })
});

//insert
//在post里面请求，都用body返回请求
router.post('/insert',function (req, res) {
  var newstype = req.body.newstype,
      newstitle = req.body.newstitle,
      newsimg = req.body.newsimg,
      newstime = req.body.newstime,
      newssrc = req.body.newssrc;

      //参数二回对应到参数一中
       connection.query("INSERT INTO `news`( `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES (?,?,?,?,?)",[newstype,newstitle,newsimg,newstime,newssrc],function (err, result) {
    if(!err){
      console.log("yes");
      res.json("");
    }
  });
});

module.exports = router;
