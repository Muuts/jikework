/**
 * Created by Administrator on 2017-02-07.
 */
var baiDu = {
    init:function () {
        this.baiduSetting();
    },
    baiduSetting:function () {
        $('#navMore,#moreProduct').mouseover(function () {
            $('#moreProduct').show();
        }).mouseout(function () {
            $('#moreProduct').hide();
        })
    }

}

$(function () {
    baiDu.init();
})