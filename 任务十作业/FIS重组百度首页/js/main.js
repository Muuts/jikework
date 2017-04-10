/**
 * Created by Administrator on 2017-02-07.
 */

var body= $('body');
var baicon = $('#bai-icon');
var temp2 =  $('.top-feed');
var baiDu = {
    init: function () {
        this.baiduSetting();
    },
    baiduSetting: function () {
        $('#navMore,#moreProduct').mouseover(function () {
            $('#moreProduct').show();
        }).mouseout(function () {
            $('#moreProduct').hide();
        })
    }

};


$(document).ready(function () {
    baiDu.init();
    /*收缩skin*/
    $('#skin-new').on('click',skinDown);
    $('.title').on('click', skinUp);
    $('.index-wrap').on('click',skinUp);

    /*点击与移入移出效果*/
    var navtype = $('.nav-type')
    navtype.on('click', btnon2);
    navtype .hover(function () {
        $(this).addClass('new-navous');
    }, function () {
        $(this).removeClass('new-navous');
    });

    /*点击与移入移出效果*/
    var cur = $('.cur');
    cur.on('click',btnon3);
    cur.hover(function () {
        $(this).addClass('cur-nerous');
    }, function () {
        $(this).removeClass('cur-nerous');
    });


    /*换肤*/
   $('.content1').on('click',skinOpen);

    /*点击与移入移出效果*/
    var menu = $('.menu-style');
    menu.on('click',btnon4);
    menu.hover(
        function () {
            $(this).addClass('menus-chance');
        },function () {
            $(this).removeClass('menus-chance');
        }
    );
    var topWrap = $('.top-wrap');
    //获取当前滚动条所滚动的高度
    $(window).scroll(function () {
        if($(window).scrollTop()>110){
            topWrap.slideDown(100);
            temp2.show();
        }else {
            topWrap.slideUp(30);
            temp2.hide();
        }
    });

    temp2.click(function () {
        /*返回顶部算法*/
        $('html,body').animate({'scrollTop':0},500);
    });

    /*top-wrap*/
});




function skinOpen() {
    var temp = Math.floor($(this).attr("data-name"));
    switch (temp){
        case 1:
            body.addClass('body-contents1');
            localStorage.setItem("key","1");
            body.removeClass('body-contents2');
            body.removeClass('body-contents3');
            baicon.attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
            break;
        case 2:
            body.addClass('body-contents2');
            localStorage.setItem("key","2");
            body.removeClass('body-contents1');
            body.removeClass('body-contents3');
            baicon.attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
            break;
        case 3:
            body.addClass('body-contents3');
            localStorage.setItem("key","3");
            body.removeClass('body-contents2');
            body.removeClass('body-contents1');
            baicon.attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
            break;
    }
}

(function() {
        var temp1 = Math.floor(localStorage.getItem("key"));
        switch (temp1){
            case 1:
                body.addClass('body-contents1');
                baicon.attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
                break;
            case 2:
                body.addClass('body-contents2');
                baicon.attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
                break;
            case 3:
                body.addClass('body-contents3');
                baicon.attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
                break;
        }
    }()
);

function skinDown(event) {
    event.stopPropagation();
    $('.head_wrapper').slideDown(500, function () {

    })
}

function skinUp(event) {
    event.stopPropagation();
    $('.head_wrapper').slideUp(500, function (event) {

    })
}


function btnon2() {
    $(this).addClass('newss--navous');
    $(this).siblings().removeClass('newss--navous');
}

function btnon3() {
    $(this).addClass('cur-nerous-new');
    $(this).siblings().removeClass('cur-nerous-new');
}

function btnon4() {
    var content1 = $('.content-1');
    var content2 = $('.content-2');
    var content3 = $('.content-3');
    var content4 = $('.content-4');
    var content5 = $('.content-5');
    var styling = $('.styling');
    $(this).css({
        backgroundColor:'#e6eaf0',
        fontWeight:'bold'
    });
    var temp = Math.floor($(this).attr("data-name"));
    switch (temp){
        case 1:
            content1.show();
            content2.hide();
            content3.hide();
            content4.hide();
            content5.hide(); break;
        case 2:
            content1.hide();
            content2.show();
            content3.hide();
            content4.hide();
            content5.hide();break;
        case 3:
            content1.hide();
            content2.hide();
            content3.show();
            content4.hide();
            content5.hide();break;
        case 4:
            content1.hide();
            content2.hide();
            content3.hide();
            content4.show();
            content5.hide();break;
        case 5:
            content1.hide();
            content2.hide();
            content3.hide();
            content4.hide();
            content5.show();break;
    }
    $(this).siblings().css({
        backgroundColor:'#fff',
        fontWeight:'normal'
    });

    //tab切换算法
 /*   $('.menu-item').click(function () {
        //tab
        $(this).addClass("active").siblings().removeClass("active");
        //内容
        $($(this).attr("data-target")).addClass("active").siblings().removeClass("active");
    })*/
}

