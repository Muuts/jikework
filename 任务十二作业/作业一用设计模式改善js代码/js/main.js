/**
 * Created by Administrator on 2017-02-07.
 */
var body= $('body');
var baicon = $('#bai-icon');
var temp2 =  $('.top-feed');
$(document).ready(function () {
    /*
    * 右侧信息
    * right_tab
    * 单例模式
    * 1.提供了对唯一实例的受控访问。
    * 2.由于在系统内存中只存在一个对象，因此可以节约系统资源
    * 3.对于一些需要频繁创建和销毁的对象单例模式无疑可以提高系统的性能。
    * 4.允许可变数目的实例。
    * */
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
    baiDu.init();

    /*
    * 收缩换肤skin
    * 单例模式
    * 点击与移入移出效果
    * */
    var skikwork = {
      init:function(){
          this.baiduskin();
      },
        baiduskin:function () {
            $('#skin-new').on('click',skinDown);
            $('.title').on('click', skinUp);
            $('.index-wrap').on('click',skinUp);
            /*换肤*/
            $('.content1').on('click',skinOpen);
        }
    };
    skikwork.init();


    /*
    * 换肤类型
    * nav-type
    * 单例模式
    * */
    var baidu_navtype ={
        init:function () {
            var me = this;
            me.render();
            me.baidunav();
        },
        render:function () {
            var me = this;
            me.navtype = $('.nav-type');
        },
        baidunav:function () {
            var me = this;
            me.navtype.on('click', btnon2);
            me.navtype .hover(function () {
                $(this).addClass('new-navous');
            }, function () {
                $(this).removeClass('new-navous');
            });
        }
    };
    baidu_navtype.init();



    /*
    * 点击与移入移出效果
    * 单例模式
    * */
    var bai_cur = {
      init:function () {
          var me =this;
          me.render();
          me.bardu_cur();
      },
        render:function () {
            var me = this;
            me.cur =$('.cur');
        },
        bardu_cur:function () {
            var me = this;
            me.cur.on('click',btnon3);
            me.cur.hover(function () {
                $(this).addClass('cur-nerous');

            }, function () {
                $(this).removeClass('cur-nerous');
            });
        }
    };
    bai_cur.init();



    /*点击与移入移出效果
    * 单例模式
    *
    * */
    var bai_menu ={
        init:function () {
            var me = this;
            me.ren_der();
            me.baidu_menu();
        },
        ren_der:function () {
            var me = this;
            me.menu = $('.menu-style');
        },
        baidu_menu:function () {
            var me = this;
            me.menu.click(function () {
                //tab
                $(this).addClass("active").siblings().removeClass("active");
                //内容
                $($(this).attr("data-target")).show().siblings().hide();
            });
            me.menu.hover(
                function () {
                    $(this).addClass('menus-chance');
                },function () {
                    $(this).removeClass('menus-chance');
                }
            );
        }
    };
    bai_menu.init();
    //tab切换算法
    /*   $('.menu-item').click(function () {
     //tab
     $(this).addClass("active").siblings().removeClass("active");
     //内容
     $($(this).attr("data-target")).addClass("active").siblings().removeClass("active");
     })*/

    /*
    * 滚动条触发
    * 单例模式
    * */
    var baidu_top ={
        init:function () {
            var me =this;
            me.render();
            me.baidu_topw();
         },
        render:function () {
            var me =this;
            me.topWrap = $('.top-wrap');
        },
        baidu_topw:function () {
            var me =this;
            //获取当前滚动条所滚动的高度
            $(window).scroll(function () {
                if($(window).scrollTop()>110){
                    me.topWrap.slideDown(100);
                    temp2.show();
                }else {
                    me.topWrap.slideUp(30);
                    temp2.hide();
                }
            });
        }
    };
    baidu_top.init();
    temp2.click(function () {
        /*返回顶部算法*/
        $('html,body').animate({'scrollTop':0},500);
    });
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



