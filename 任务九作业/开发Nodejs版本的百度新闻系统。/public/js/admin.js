/**
 * Created by Administrator on 2017-03-20.
 */
$(document).ready(function () {
    var $newsTable =$('#newsTable tbody');

   refreshNews();

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
            var jsonNews = {
                newstitle:$('#newstitle').val(),
                newstype:$('#newstype').val(),
                newsimg:$('#newsimg').val(),
                newstime:$('#newstime').val(),
                newssrc:$('#newssrc').val()

            };
            console.log(jsonNews);

            //提交添加
            $.ajax({
                url: '/admin/insert',
                type:'post',

                //设置返回数据，格式为json
                dataType:'json',

                //设置发送数据
                data:jsonNews,

                success:function (data) {
                    //console.log(data);
                    refreshNews();
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
        if(deleteId){
            $.ajax({
                url: '/admin/delete',
                type:'post',
                data:{nenwsid:deleteId},
                success:function (data) {
                    $("#deleteModal").modal('hide');
                    console.log(data);
                    refreshNews();
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
            url: '/admin/curnews',
            type:'get',
            dataType:'json',
            data:{nenwsid:updataId},
            success:function (data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                //console.log(utime);
                $('#unewstime').val(utime);
            }
        })
    });
    $('#confirmUpdate').click(function () {
        console.log('222');
        $.ajax({
            url:'/admin/update',
            type:'post',
            data:{
                newstitle:$('#unewstitle').val(),
                newstype:$('#unewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc: $('#unewssrc').val(),
                id:updataId
            },
            success:function () {
                $('#updateModal').modal('hide');
                refreshNews();
                console.log('111');
            }

        })
    });



    //动态添加事件
    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            type:'get',
            url: '/admin/survery',
            dataType:'json',
            success:function (data) {
                //console.log(data);
                data.forEach(function (item,index,array) {
                    var $did = $('<td></td>').html(item.id);
                    var $tdtype = $('<td></td>').html(item.newstype);
                    var $tdtitle = $('<td></td>').html(item.newstitle);
                    var $tdimg = $('<td></td>').html(item.newsimg).addClass({'overflow-wrap':'break-word'});
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
});

