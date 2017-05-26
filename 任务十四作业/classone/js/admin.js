/**
 * Created by Administrator on 2017-03-20.
 */
$(document).ready(function () {
    var $newsTable =$('#newsTable tbody');

   refreshNews();

    /*判断td字符长度*/


    /*添加新闻*/
    $('#btnsubmit').click(function (e) {
        //取消默认点击事件
        e.preventDefault();

        //输入判断
        if($('#newstitle').val()=="" || $('#newstime').val()=="" || $('#newsimg').val()=="" ){
            if($('#newstitle').val()==""){
                $('#newstitle').parent().addClass("has-error");
            }else{
                $('#newstitle').parent().removeClass("has-error");
            }
            if($('#newstime').val()==""){
                $('#newstime').parent().addClass("has-error");
            }else{
                $('#newstime').parent().removeClass("has-error");
            }
            if($('#newsimg').val()==""){
                $('#newsimg').parent().addClass("has-error");
            }else{
                $('#newsimg').parent().removeClass("has-error");
            }
            if($('#newssrc').val()==""){
                $('#newssrc').parent().addClass("has-error");
            }else{
                $('#newssrc').parent().removeClass("has-error");
            }
        }else{
            var token = getCookie("token");
            var jsonNews = {
                newstitle:$('#newstitle').val(),
                newstype:$('#newstype').val(),
                newsimg:$('#newsimg').val(),
                newstime:$('#newstime').val(),
                newssrc:$('#newssrc').val(),
                token:token
            };
            //console.log(jsonNews);

            //提交添加
            $.ajax({
                url: 'sever/insert.php',
                type:'post',

                //设置返回数据，格式为json
                dataType:'json',

                //设置发送数据
                data:jsonNews,

                success:function (data) {
                    console.log(data.token);
                    refreshNews();
                    setcookie("token", data.token);
                },
                error:function () {
                    console.log("error");
                }
            })
        }
    });


    /*删除新闻的功能*/
    //利用事件委托，给新添加的标签绑定事件，不然直接绑定则没有效果
    var deleteId = null;
    $newsTable.on('click','.btn-danger',function () {
        //console.log('click');
        //模态框显示
        $("#deleteModal").modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    });
    $('#confirmDelete').click(function () {
        var token = getCookie("token");
        if(deleteId){
            $.ajax({
                url: 'sever/delete.php',
                type:'post',
                data:{nenwsid:deleteId,token:token},
                success:function (data) {
                    $("#deleteModal").modal('hide');
                    setcookie("token",data.token);
                    refreshNews();
                    console.log(data.token);
                }
            })
        }
    });

    /*修改新闻的功能*/
    //利用事件委托，给新添加的标签绑定事件，不然直接绑定则没有效果
    var updataId = null;
    $newsTable.on('click','.btn-primary',function () {
        //console.log('click');
        //模态框显示
        $("#updateModal").modal('show');
        updataId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: 'sever/curnews.php',
            type:'get',
            dataType:'json',
            data:{nenwsid:updataId},
            success:function (data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);

                //var utime = data[0].newstime.split('')[0];
                //console.log(utime);
                $('#unewstime').val(data[0].newstime);
            }
        })
    });

    $('#confirmUpdate').click(function () {
        var token = getCookie("token");
        $.ajax({
            url:'sever/update.php',
            type:'post',
            data:{
                newstitle:$('#unewstitle').val(),
                newstype:$('#unewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc: $('#unewssrc').val(),
                id:updataId,
                token:token
            },
            success:function (data) {
                $('#updateModal').modal('hide');
                refreshNews();
                setcookie("token",data.token);
                console.log(data.token);
            }
        })
    });



    //动态添加事件
    function  refreshNews() {
        $newsTable.empty();
        $.ajax({
            type:'get',
            url: 'sever/survery.php',
            dataType:'json',
            success:function (data) {
                console.log(data[1].token);
                setcookie("token",data[1].token);
                data.forEach(function (item,index,array) {
                    var $did = $('<td></td>').html(item.id);
                    var $tdtype = $('<td></td>').html(item.newstype);
                    var $tdtitle = $('<td></td>').html(item.newstitle);
                    var $tdimg = $('<td></td>').html(item.newsimg).css({'word-break':'break-word'});
                    var $tdsrc =$('<td></td>').html(item.newssrc);
                    var $tdtime =$('<td></td>').html(item.newstime);
                    var $tdctrl = $('<td></td>');
                    var $btnupadte = $('<button></button>').addClass("btn btn-primary btn-xs").html('修改');
                    var $btndelete = $('<button></button>').addClass("btn btn-danger btn-xs").html('删除');
                    $tdctrl.append($btnupadte,$btndelete);
                    var $trow = $('<tr></tr>');
                    $trow.append($did,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
                    $newsTable.append($trow);

                })
            },
            error:function () {
                console.log('111');
            }

        })

    }
    /*获取input的token*/
    var hup = $('.hup');
    function setcookie(name, value) {
        hup.val(value) ;
        var hour = 1;   //设定cookie有效时间为1小时
        var exp = new Date();
        exp.setTime(exp.getTime() + hour * 60 * 60 * 1000);
        document.cookie = name + "=" +  value + ";expires=" + exp.toGMTString();
    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return arr[2];
        else
            return null;
    }
});

