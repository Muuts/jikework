$(document).ready(function() {
    refreshNews("精选");

    $(window).resize(function(){
        //获取当前设备的宽度，通过总体宽度来给标签设置平均宽度
        var deviceWidth = $('body').width();
        //console.log(deviceWidth);
        $('nav li').each(function (index,item) {
            //获取a里面的文本，通过split空字符拆分，返回数组
            //Console.log(item.find('a').html().split('').length);
            if($(this).find('a').html().split('').length>2){
                $(this).width(deviceWidth/3);

            }else{
                $(this).width(deviceWidth/6);
            }
        });
    });



    $('nav a').click(function (e) {
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    })
});

function refreshNews(type) {
    var $lists = $('article ul');
    //清空子节点
    $lists.empty();
    $.ajax({
        // 按本地服务器的路径来的,所以不用相对自己的路径
        url: 'sever/getNews.php',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function(data) {
            //console.log(data);

            //重新添加子节点
            data.forEach(function (item,index,array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr({ "src": item.newsimg, 'width': '100%' }).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $("<span></span>").addClass('newstime').html(item.newstime).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
            });
        },
        error: function() {

        }
    })

}
