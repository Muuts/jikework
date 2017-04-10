/**
 * Created by Administrator on 2017-03-02.
 */
/*获取按键值函数*/
//记录 值 符号
var data = {left: "", sign: "", right: "", result: ""};
var current = false;
var isMaxLength = false;
var c_get = function (tagId) {
    return document.getElementById(tagId);
};
//加法计算
function FloatAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
//减法计算
function FloatSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
//浮点数乘法运算
function FloatMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) {
    }
    try {
        m += s2.split(".")[1].length
    } catch (e) {
    }

    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
//浮点数除法运算
function FloatDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length
    } catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length
    } catch (e) {
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        if (arg2 == 0) {
            return "NAN";
        } else {
            return (r1 / r2) * pow(10, t2 - t1);
        }
    }
}
//平方运算根号
function Floatsqrt(arg) {
    return Math.sqrt(arg);
}
//超过input文本修复
function toFix(arg) {
    if (arg.toString().length > 8) {
        return arg.toFixed(14);
    } else {
        return arg;
    }

}
//计算代码封装
function encapsulation(arg) {
    switch (arg) {
        case 1:
            if (current == false) {
                if (data.left == "") {
                    if (data.result != "") {
                        c_get("resultIpt").value = toFix(Floatsqrt(data.result));
                    }
                } else {
                    c_get("resultIpt").value = toFix(Floatsqrt(data.left));
                    data.result = toFix(Floatsqrt(data.left));
                    data.right = "";
                    data.left = "";
                }
            } else {
                c_get("resultIpt").value = toFix(Floatsqrt(data.right));
                data.right = toFix(Floatsqrt(data.right));
            }
            break;
        case 2:
            if (current == false) {
                if (data.left == "") {
                    if (data.result != "") {
                        c_get("resultIpt").value = toFix(1 / data.result);
                    }
                } else {
                    c_get("resultIpt").value = toFix(1 / data.left);
                    data.result = toFix(1 / data.left);
                    data.right = "";
                    data.left = "";
                }
            } else {
                c_get("resultIpt").value = toFix(1 / data.right);
                data.right = toFix(1 / data.right);
            }
            break;
        case 3:
            if (current == false) {
                if (data.left == "") {
                    if (data.result != "") {
                        c_get("resultIpt").value = toFix(data.result * 0.01);
                    }
                } else {
                    c_get("resultIpt").value = toFix(data.left * 0.01);
                    data.result = toFix(data.left * 0.01);
                    data.right = "";
                    data.left = "";
                }
            } else {
                c_get("resultIpt").value = toFix(data.right * 0.01);
                data.right = toFix(data.right * 0.01);
            }
            break;
        case 4:
            if (current == false) {
                if (data.left == "") {
                    if (data.result != "") {
                        c_get("resultIpt").value = toFix(Math.sin(parseFloat(data.result)));
                    }
                } else {
                    c_get("resultIpt").value = toFix(Math.sin(parseFloat(data.left)));
                    data.result = toFix(Math.sin(parseFloat(data.left)));
                    data.right = "";
                    data.left = "";
                }
            } else {
                c_get("resultIpt").value = toFix(Math.sin(parseFloat(data.right)));
                data.right = toFix(Math.sin(parseFloat(data.right)));
            }
            break;
        case 5:
            if (current == false) {
                if (data.left == "") {
                    if (data.result != "") {
                        c_get("resultIpt").value = toFix(Math.cos(parseFloat(data.result)));
                    }
                } else {
                    c_get("resultIpt").value = toFix(Math.cos(parseFloat(data.left)));
                    data.result = toFix(Math.cos(parseFloat(data.left)));
                    data.right = "";
                    data.left = "";
                }
            } else {
                c_get("resultIpt").value = toFix(Math.cos(parseFloat(data.right)));
                data.right = toFix(Math.cos(parseFloat(data.right)));
            }
            break;
        case 6:
            if (current == false) {
                if (data.left == "") {
                    if (data.result != "") {
                        c_get("resultIpt").value = toFix(Math.tan(parseFloat(data.result)));
                    }
                } else {
                    c_get("resultIpt").value = toFix(Math.tan(parseFloat(data.left)));
                    data.result = toFix(Math.tan(parseFloat(data.left)));
                    data.right = "";
                    data.left = "";
                }
            } else {
                c_get("resultIpt").value = toFix(Math.tan(parseFloat(data.right)));
                data.right = toFix(Math.tan(parseFloat(data.right)));
            }
            break;
    }
}

var calculator = {
    //计算并初始化
    arith: function (sn) {
        if (parseFloat(data.sign) != -2) {
            switch (parseFloat(data.sign)) {
                case 0:
                    data.result = FloatAdd(parseFloat(data.left), parseFloat(data.right));
                    break;
                case 1:
                    data.result = FloatSub(parseFloat(data.left), parseFloat(data.right));
                    break;
                case 2:
                    data.result = FloatMul(parseFloat(data.left), parseFloat(data.right));
                    break;
                case 3:
                    data.result = FloatDiv(parseFloat(data.left), parseFloat(data.right));
                    break;
            }
            data.left = "";
            data.sign = sn;
            data.right = "";
            current = false;
            c_get("resultIpt").value = data.result;//Number(data.result).toLocaleString();
        }
    },
    //输入符号后，判断左右值是否存在
    /*foo（）
     * 分 4 种情况
     * 1. 左值不存在，但有result。直接将result赋值给左值
     * 2. 左值不存在，但无result。直接退出计算
     * 3. 右值不存在，可以直接输入
     * 4。右值存在，计算得出结果，并记录运算符号，用于判断是否从新输入
     * */
    foo: function (sn) {
        if (data.left == "") {
            if (data.result != "") {
                data.left = data.result;
                current = true;
            } else {
                return false;
            }
        } else {
            if (data.right == "") {
                current = true;
            } else {
                calculator.arith(sn);
                data.left = data.result;
                data.sign = sn;
                data.right = "";
                current = true;
            }
        }
        //储存 符号
        data.sign = sn;
    },
    //字符输入
    input: function (key, type) {
        if (type == -2) {

        }
        switch (type) {
            case -1:
                //判断是否大于最大输入值
                if (isMaxLength == false) {
                    //判断左右值写入
                    if (current) {
                        //判断 . 是否存在
                        if (data.right.toString().indexOf(".") != -1 && key.value == ".") {
                            return false;
                        } else {
                            if (key.value == "." && (data.right == "" || data.right == "0")) {
                                data.right = "0" + key.value;
                            } else {
                                data.right += key.value;
                            }
                        }

                        c_get("resultIpt").value = data.right;
                    } else {
                        if (data.left.toString().indexOf(".") != -1 && key.value == ".") {
                            return false;
                        } else {
                            if (data.left.toString().length <= 1 && data.left == "0") {
                                data.left = "0" + key.value;
                            } else {
                                data.left += key.value;
                            }
                        }
                        c_get("resultIpt").value = data.left;
                    }
                    if (c_get("resultIpt").value.length > 16) {
                        isMaxLength = true;
                    }
                } else {
                    alert("只能输入不大于17位的字符");
                }
                break;
            //计算结果
            case -2 :
                if (data.left != "" && data.right != "") {
                    calculator.arith(-2);
                } else {
                    if (data.right != "" && data.sign != "" && parseFloat(data.sign) != -2) {
                        data.right = data.left;
                        data.left = data.result;
                        calculator.arith(-2);
                    }
                }
                isMaxLength = false;
                break;
            //加负号计算
            case -3:
                if (c_get("resultIpt").value.substring(0, 1) == "-") {
                    c_get("resultIpt").value = c_get("resultIpt").value.substr(1);
                } else {
                    c_get("resultIpt").value = "-" + c_get("resultIpt").value;
                }
                if (current == false) {
                    if (data.left == "") {
                        if (data.result != "") {
                            data.left = data.result;
                            data.left = -Number(data.left);
                        }
                    } else {
                        //data.left = -data.left;
                        data.left = c_get("resultIpt").value;
                    }
                } else {
                    data.right = c_get("resultIpt").value;
                }
                break;
            //计算+
            case 0:
                calculator.foo(0);
                isMaxLength = false;
                break;
            //计算-
            case 1:
                calculator.foo(1);
                isMaxLength = false;
                break;
            //计算*
            case 2:
                calculator.foo(2);
                isMaxLength = false;
                break;
            //计算/
            case 3:
                calculator.foo(3);
                isMaxLength = false;
                break;
            //计算根号
            case 4 :
                encapsulation(1);
                break;
            //计算倒数
            case 5:
                encapsulation(2);
                break;
            //计算百分比
            case 6 :
                encapsulation(3);
                break;
            //计算sin
            case 7 :
                encapsulation(4);
                break;
            //计算cos
            case 8 :
                encapsulation(5);
                break;
            //计算tan
            case 9:
                encapsulation(6);
                break;
        }
    },
    //清屏
    clearAll: function () {
        c_get("resultIpt").value = 0;
        current = false;
        data.left = data.right = data.result = "";
    },
    //退格
    remove: function () {
        if (current == false) {
            if (data.left.length > 0) {
                data.left = data.left.substring(0, data.left.length - 1);
                c_get("resultIpt").value = data.left;
            }
        } else {
            if (data.right.length > 0) {
                data.right = data.right.substring(0, data.right.length - 1);
                c_get("resultIpt").value = data.right;
            }
        }
    }
};