/**
 * Created by Administrator on 2017-03-11.
 */
$(document).ready(function () {
    $('.list-target').hover(function () {
        //tab
        // $(this).addClass("active").siblings().removeClass("active");
        //内容
        /*
        * 侧边栏效果
        * */
        $($(this).attr("data-name")).show();
        $($(this).attr("data-target")).addClass('a-color');
    },function () {
        $($(this).attr("data-name")).hide();
        $($(this).attr("data-target")).removeClass('a-color');
    });

    /*
    * 效果类
    * */
    var lessonplay = $('.lessonplay');
    var lessonlove = $('.lessonlove');
    var lessininfor = $('.lessin-infor:not(:animated)');
    var zhongji = $('.zhongji');
    var introduce = $('.introduce:not(:animated)');
    var learnnumeber =$('.learn-numeber');
    var lessonview =$('.lesson-view');

    /*
    * 效果事件
    * */
    lessonview.on('mouseenter',btnon1);
    function btnon1() {
        $(this).find('.lessonplay').show();
        $(this).find('.lessonlove').show();
        $(this).find('.zhongji').show();
        $(this).find('.learn-numeber').show();
        $(this).find('.introduce').show().stop(true).animate({'opacity':1},100);
        $(this).find('.lessin-infor').stop(true).animate({'height':"175px"},300);
    }

    lessonview.on('mouseleave',btnon2);
    function btnon2() {
        lessonplay.hide();
        lessonlove.hide();
        zhongji.hide();
        learnnumeber.hide();
        introduce.animate({'opacity':0},500).hide();
        lessininfor.animate({'height':"88px"},300);
    }



    /*
    * 转换效果
    * */
    var kzing = $('.kz');
    var pxing =$('.px');
    var view1 =$('.view1');

    kzing.click(function () {
        lessonview.off('mouseenter',btnon3).off('mouseleave',btnon4);
        lessonview.on('mouseenter',btnon1).on('mouseleave',btnon2);
        view1.removeClass('lesson-list2');
        view1.addClass('lesson-list');
        learnnumeber.hide();
        introduce.hide();
        zhongji.hide();
    });

    
    
    pxing.click(function () {
        lessonview.off('mouseenter',btnon1).off('mouseleave',btnon2);
        view1.removeClass('lesson-list');
        view1.addClass('lesson-list2');
        learnnumeber.show();
        introduce.show();
        zhongji.show();
        lessonview.on('mouseenter',btnon3).on('mouseleave',btnon4);
    });
    function btnon3() {
        $(this).find('.lessonplay').show();
    }
    
    function btnon4() {
        $(this).find('.lessonplay').hide();
    }
    
    
    /*
    * 搜索效果
    * */

    var searchIcon = $('.search-icon');
    var searcherBbox =$('.searcher-box');
    var closeIcon =$('.close-icon');
    searchIcon.click(function () {
        searcherBbox.show().stop(true).animate({'width':'850px'},500);
    });
    closeIcon.click(function () {
        searcherBbox.hide().css({width:0});
    });

    //*
    // 返回顶部
    // */
    var top = $('.top');
    var congotop =$('.con-gotop');
    $(window).scroll(function () {
        if($(window).scrollTop()>100)
        {
            congotop.show();
        }else {
            congotop.hide();
        }
    });
    top.click(function () {
        $('html,body').animate({'scrollTop':0},500);
    })
});

