function refute1() {
    document.getElementById("num").innerText += 1;
}
function refute2() {
    document.getElementById("num").innerText += 2;
}
function refute3() {
    document.getElementById("num").innerText += 3;
}
function refute4() {
    document.getElementById("num").innerText += 4;
}
function refute5() {
    document.getElementById("num").innerText += 5;
}
function refute6() {
    document.getElementById("num").innerText += 6;
}
function refute7() {
    document.getElementById("num").innerText += 7;
}
function refute8() {
    document.getElementById("num").innerText += 8;
}
function refute9() {
    document.getElementById("num").innerText += 9;
}
function refute0() {
    document.getElementById("num").innerText += 0;
}
function refute11() {
    document.getElementById("num").innerText += "/";
}
function refute12() {
    document.getElementById("num").innerText += "+";
}
function refute13() {
    document.getElementById("num").innerText += "*";
}
function refute14() {
    document.getElementById("num").innerText += "-";
}
function refute15() {
    document.getElementById("num").innerText += ".";
}
function refuteAC() {
    document.getElementById("num").innerText = "";
}

function calus() {
    var res = document.getElementById("num").innerText;
    if (res.indexOf("+")>0){
        var add = res.indexOf("+");
        var temp1 = parseFloat(res.substring(add+1));
        var temp2 = parseFloat(res.substring(0,add));
        document.getElementById("num").innerText = temp1+temp2;

    }else if(res.indexOf("-")>0){
        var reduce = res.indexOf("-");
        var temp3 = parseFloat(res.substring(reduce+1));
        var temp4 = parseFloat(res.substring(0,reduce));
        document.getElementById("num").innerText = temp3-temp4;

    }else if(res.indexOf("*")>0){
        var ride = res.indexOf("-");
        var temp5 = parseFloat(res.substring(ride+1));
        var temp6 = parseFloat(res.substring(0,ride));
        document.getElementById("num").innerText = temp5*temp6;

    }else if(res.indexOf("/")>0){
        var except = res.indexOf("-");
        var temp7 = parseFloat(res.substring(except+1));
        var temp8 = parseFloat(res.substring(0,except));
        document.getElementById("num").innerText = temp7/temp8;
    }else {
        //document.getElementById("num").innerText = "NAN";
    }
}

//查找字符


/*  var regex = /^(\w\+\w)$/ ;  //正则不能用
 if (regex.test(res)){
 alert(true);
 }else {
 alert(false)
 }*/