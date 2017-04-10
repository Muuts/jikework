/**
 * Created by Administrator on 2017-03-04.
 */

function debug(e, skin) {
    localStorage.setItem("key",skin);
    document.body.className = localStorage.getItem("key");

}


/*var debug1 = document.getElementById("debug");
debug1.onclick = function () {
                                            //需要传入参数的用不了这种方式
};*/



(function () {
    document.body.className = localStorage.getItem("key");
})();