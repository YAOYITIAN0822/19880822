const shijian = 3000;  // 自动播放速度，单位为毫秒
var index = 0;  // 当前轮播图的索引
const swiperitem = document.getElementById('swiper'); // 获取轮播图的父元素
const swiper = swiperitem.getElementsByTagName('div'); // 获取轮播图的子元素集合

// 自动轮播
var setTime = setInterval(() => {
    if (index < swiper.length - 1) {
        index++;
    } else {
        index = 0;
    }
    style(); // 设置轮播图的样式
}, shijian);

// 点击切换
for (let i = 0; i < swiper.length; i++) {
    swiper[i].onclick = function () {
        if (i === index) return; // 如果点击的是当前轮播图，则不进行切换
        index = i; // 更新当前轮播图的索引
        style(); // 设置轮播图的样式
    }
}

// 鼠标移入暂停
swiperitem.onmouseover = function () {
    clearInterval(setTime); // 清除自动轮播的定时器
}

// 鼠标移出继续轮播
swiperitem.onmouseout = function () {
    setTime = setInterval(() => {
        if (index < swiper.length - 1) {
            index++;
        } else {
            index = 0;
        }
        style(); // 设置轮播图的样式
    }, shijian);
}

// 设置轮播图的样式
function style() {
    console.log(index); // 打印当前轮播图的索引，用于调试
    for (let i = 0; i < swiper.length; i++) {
        swiper[i].className = 'swiper-time dd'; // 将所有轮播图的样式重置为默认样式
    }
    if (index === swiper.length - 1) {
        swiper[index].className = 'swiper-time b'; // 当前轮播图的样式
        swiper[0].className = 'swiper-time a'; // 下一张轮播图的样式
        swiper[index - 1].className = 'swiper-time c'; // 上一张轮播图的样式
    } else if (index === 0) {
        swiper[index].className = 'swiper-time b'; // 当前轮播图的样式
        swiper[index + 1].className = 'swiper-time a'; // 下一张轮播图的样式
        swiper[swiper.length - 1].className = 'swiper-time c'; // 上一张轮播图的样式
    } else {
        swiper[index].className = 'swiper-time b'; // 当前轮播图的样式
        swiper[index + 1].className = 'swiper-time a'; // 下一张轮播图的样式
        swiper[index - 1].className = 'swiper-time c'; // 上一张轮播图的样式
    }
}