
$(function() {
    // <!-- 游戏导航栏下拉框 -->
   $('#main>li:eq(2)').mouseover(function() {
       $('#game').stop().slideDown(300);
   });
   $('#main>li:eq(2)').mouseout(function() {
       $('#game').stop().slideUp("slow");
   });

   //  jquery 实现轮播图
   let num = 1;
   let i = 0;
   let timer = null;
   swiper();
   // 把定时器功能做一个函数封装
   function swiper() {
       timer = setInterval(() => {
           // 1、图片功能
           num++;
           // 设置条件 当num大于6，num=2
           if (num > 6) {
               // num = 6的时候，其实显示  ban1  
               // 应该通过样式赋值的形式，直接变为 真正的 ban1
               $("#navs").css('left', -800)
               num = 2;
           }
           $("#navs").animate({ left: -num * 800 }, 500);

           // 2.小圆点功能
           i++;
           if (i > 4) {
               i = 0;
           }
           $("#bots li").eq(i).addClass('active').siblings().removeClass('active');

       }, 2500);
    }
})