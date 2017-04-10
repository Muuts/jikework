/**
 * Created by Administrator on 2017-02-25.
 */
function cols() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var select = document.getElementById("op").value;
    if (isNull(num1) == true && isNull(num2) == true) {
        var sum1 = add(num1, num2, select);
        document.getElementById('col').innerText = sum1;
    } else {
        document.getElementById('col').innerText = "输入格式不正确";
    }
}
function isNull(data) {
    var chance = typeof(data);
    if (isNaN(data)) {        // 如果数字是NaN, 返回true.    其他情况，返回false.
        return false;

    } else {
        switch (chance) {
            case "string":
                return false;
            case "":
                return false;
            case "number":
                return true;
            default:
                break;
        }
    }
}
function add(n1, n2, se) {
    switch (se) {
        case '+':
            return parseFloat((n1 + n2).toFixed(2));
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            if (n2 == 0 || n1 == 0) {
                return '输入错误';
            } else {
                return parseFloat((n1 / n2).toFixed(8)); //toFixed(8)转化为只循环后面8位，且返回为字符串类型，修复js的bug
            }
        default:
            return '输入错误';
    }
}