/**
 * Created by Administrator on 2017-02-25.
 */
//出现次数最多的字母
//给出其出现的总次数
//出现次数最多的这个字母每一个所在的位置，即索引下标。
function calu() {
    var arr = ["a","x","b","d","m","a","k","m","p","j","a"];
    var res = [];
    var sub = {};
    var max;
    var res2 = [];
    //item : 当前值  index：当前遍历值的索引 arr：当前所对应的数组
    arr.forEach(function (item,index,arry) {
        if(sub[item]){          //关联数组。通过输入“非序数类型为下标”来存取的数组，当该下标存在时，就执行，不存在就跳过
            sub[item].count++;
            sub[item].index.push(index);

        }else {
            sub[item] = {};
            sub[item][item]= item;   //用方括号调用子变量接收item标量
            sub[item].count = 1;     //次数
            sub[item].index = [];    //索引下标
            sub[item].index.push(index);
        }
    });
    for(var i in sub) {
        var item = sub[i];
        res.push(item);
    }

    //按重复次数排序
    res.sort(function(a,b) {
        return a.count - b.count < 0;
    });

    //把最大的对象属性导出
    for(var a = 0; a <1; a++) {
        if(a === 0) {
            max = res[a].count;
        }
        if(res[a].count === max) {
            res2.push(res[a]);
        }
    }
//得到出现次数最多的字母数组
    console.log(res2);
    var utils = res2[0]
    var values=[];  //定义一个数组用来接受value
    for(var key in utils){
        values.push(utils[key]);
    }
    document.getElementById("num1").innerText = " 最多字母是 ："+values[0];
    document.getElementById("num2").innerText = " 最多的个数是 ："+values[1];
    document.getElementById("num3").innerText = " 最多个数的位置是 ："+values[2];
}