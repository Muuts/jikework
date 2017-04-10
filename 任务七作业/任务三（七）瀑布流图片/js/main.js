/**
 * Created by Administrator on 2017-03-13.
 */
$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();
        //当鼠标滚动，数据自动加载

        //模拟网上加载数据的格式JOSN
        var dataImg = {"data": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}, {"src": "5.jpg"}]};

        //设置鼠标监听事件
        window.onscroll = function () {
            //满足条件则加载

            if (scrollside()) {
                //遍历网络的数据
                $.each(dataImg.data,function (index, value) {
                    //jq动态创建div和img
                    //先创建最外层的box，先创建box对象：指定标签div，再添加标签class。再通过appendTo追加到容器#container
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    //再创建content的div,并加载到box中
                    var content = $("<div>").addClass("content").appendTo(box);

                    //更换格式，变成图片的绝对地址
                     console.log("images/"+$(value).attr('src'));

                    //最后创建img,再将网络数据格式转为图片的地址，添加到src属性，再插入到content这个容器中
                    $("<img>").attr("src","images/"+$(value).attr("src")).appendTo(content);
                });
                //再以imgLocation()的格式添加；否则会错乱
                imgLocation();
            }
        };

        $(window).resize(function () {
            imgLocation();
        })
    })
});
function scrollside() {
    //先创建一个box对象
    var box = $('.box');
    //offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
    //计算出最后一个图片的整体高度，及再加上自身高度的一半，且转换为整数
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);

    //获取当前文档的高度
    var documentHeight = $(document).width();

    //获取当前滚动条所滚动的高度
    var scrollHeight = $(window).scrollTop(); //scrollTop():设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离

    //通过比较最后一个图片的整体高度 于 当前文档的高度+滚动条所滚动的高度，来判断加载数据与否
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;

}
function imgLocation() {
    var box = $(".box");
    //获取当前所遍历的对象的宽度
    //输入id索引号，即可返回
    var boxWidth = box.eq(0).width();
    //得到当前屏幕宽度所能放置的照片数量
    var num = Math.floor($(window).width() / boxWidth);
    //设置一个储存所有盒子的高度，以便获取到当前盒子最小高度的那个盒子
    var boxArr = [];
    //采用each()循环进行遍历
    // 第一个参数index是当前所在的位置，即索引号
    // 第二个参数是当前的元素对象
    box.each(function (index, value) {
        //获取盒子的高度
        var boxHeight = box.eq(index).height();

        //储存第一排照片
        //方式：当所索引的数小于第一排的所能放置的数，就储存
        if (index < num) {
            //储存肯定要添加索引的
            boxArr[index] = boxHeight;

            //bug2
            $(value).css({ "position": "static"})


        } else { //进入第二排设置
            //得到第一排中最小的高度
            var minboxHeight = Math.min.apply(null, boxArr); //将boxArr传入给min当做参数，筛选出最小那个
            //获取当前高度最小图偏大位置
            var minboxIndex = $.inArray(minboxHeight, boxArr);//此方法可返回最小高度的位置，且是从0开始，及第二张为1
            //value所返回的是锁遍历的box元素，所以转为jq对象，对value进行操作摆放操作
            $(value).css({
                //设置绝对布局
                "position": "absolute",
                //高度为最小图片的高度
                "top": minboxHeight,    //当前是值，不用加""号
                //左边的宽度是：高度最小图片（box.eq(minboxIndex)）的左边的距离（position().left）
                "left": box.eq(minboxIndex).position().left
            });
            //再重新计算最小图片当前的高度，此时应该算上最新加入的图片高度
            boxArr[minboxIndex] += box.eq(index).height();
            //数组传入的参数为下标序号
        }
    })
}
