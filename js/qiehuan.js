// 定义一个全局变量t，用于存储定时器的标识
var t = null;

// 调用time()函数，用于显示当前时间，并启动定时器
time();

// 设置定时器，每隔1秒钟调用一次time()函数，实现时间的实时更新
t = setTimeout(time, 1000);

// time()函数用于显示当前时间
function time() {
    // 清除之前的定时器
    clearTimeout(t);

    // 获取当前时间的年、月、日、时、分、秒
    var dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();

    // 将当前时间显示在具有.showTime类的元素中
    document.querySelector(".showTime").innerHTML = y + "年" + mt + "月" + day + " " + h + "时" + m + "分" + s + "秒";

    // 设定定时器，循环运行
    t = setTimeout(time, 1000);
}

// 当鼠标悬停在具有index_xiezhen id的元素上时，显示具有left和right id的元素
document.getElementById("index_xiezhen").onmouseover = function () {
    document.getElementById("left").style.display = "block";
    document.getElementById("right").style.display = "block";
}

// 当鼠标离开具有index_xiezhen id的元素时，隐藏具有left和right id的元素
document.getElementById("index_xiezhen").onmouseout = function () {
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
}

// 当点击具有right id的元素时，根据当前显示的元素，切换显示具有one_xiezhen和two_xiezhen id的元素
document.getElementById("right").onclick = function () {
    if (document.getElementById("one_xiezhen").style.display == "none") {
        document.getElementById("one_xiezhen").style.display = "block";
        document.getElementById("two_xiezhen").style.display = "none";
    } else {
        document.getElementById("one_xiezhen").style.display = "none";
        document.getElementById("two_xiezhen").style.display = "block";
    }
}

// 当点击具有left id的元素时，根据当前显示的元素，切换显示具有one_xiezhen和two_xiezhen id的元素
document.getElementById("left").onclick = function () {
    if (document.getElementById("one_xiezhen").style.display == "none") {
        document.getElementById("one_xiezhen").style.display = "block";
        document.getElementById("two_xiezhen").style.display = "none";
    } else {
        document.getElementById("one_xiezhen").style.display = "none";
        document.getElementById("two_xiezhen").style.display = "block";
    }
}