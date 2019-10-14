

// 点击PC端左导航文字变色

var myhome_pc = document.getElementById('myhome');
var myabout_pc = document.getElementById('myabout');
var mystay_pc = document.getElementById('mystay');
var myexpect_pc = document.getElementById('myexpect');
var homepage = document.querySelector(".homepage");
var about = document.querySelector(".about");
var message = document.querySelector(".message");
var more = document.querySelector(".more");

myhome_pc.onclick = function () {
    str(homepage, about, more, message);
}
myabout_pc.onclick = function () {
    str(about, message, more, homepage);
}
mystay_pc.onclick = function () {
    str(message, more, about, homepage);
}
myexpect_pc.onclick = function () {
    str(more, message, about, homepage);
}

function str(a, b, c, d) {
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
}
$('.myNavigation_ul li').click(function () {
    $('.myNavigation_ul li a').css({ 'color': '#ddd', });
    $(this).children('a').css({ 'color': '#25b0c2', });
})

//  PC端右导航点击效果

var Navigation = document.getElementsByClassName('Navigation_right')[0];

var OkNavclick_i = document.getElementsByClassName('OkNavclick_i')[0];

var noNavclick_i = document.getElementsByClassName('noNavclick_i')[0];

// var mybody = document.body;

OkNavclick_i.onclick = function () {
    Navigation.style.right = "0px";
    OkNavclick_i.style.display = "none";
    noNavclick_i.style.display = "block";

}

noNavclick_i.onclick = function () {
    Navigation.style.right = "-13%";
    OkNavclick_i.style.display = "block";
    noNavclick_i.style.display = "none";

}

// 手机端导航点击变色和切换

var myhome_sji = document.getElementById('myhome_sji');
var myabout_sji = document.getElementById('myabout_sji');
var mystay_sji = document.getElementById('mystay_sji');
var myexpect_sji = document.getElementById('myexpect_sji');

// var myurl_sji = window.location.href;

myhome_sji.onclick = function () {
    str(homepage, about, more, message);
}
myabout_sji.onclick = function () {
    str(about, homepage, more, message);
}
mystay_sji.onclick = function () {
    str(message, about, homepage, more);
}
myexpect_sji.onclick = function () {
    str(more, about, message, homepage);
}

function str(a, b, c, d) {
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
}

$('.myNavigation_ul_sj li').click(function () {
    $('.myNavigation_ul_sj li a').css({ 'color': '#666', });
    $(this).children('a').css({ 'color': '#25b0c2', });
})

// 留言点击出现按钮


cancel.onclick = function () {
    behind_one.value = '';
}


var comment = document.querySelector('.comment');
var publish = document.getElementById("publish");

publish.onclick = function () {
    if (true) {}
    comment.style.display = "block";
    var behind_one = document.getElementById("behind_one").value;
    if (behind_one == "") {
        alert("留言内容不能为空！");
    }else {
        var myimg = "images/timg.jpg";
    // 时间
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    // 时间
    if (behind_one.length <= 25) {
        // alert("评论成功!");
        comment.innerHTML += "<li class=" + 'comment_li' + "><img src = " + myimg + ">" +
            "<div class=" + 'behind_text' + ">" + behind_one + "<br>" + "<span class=" + 'behind_right' + ">" + currentdate + "</span>" + "</div>" + "</li>";
    } else {
        alert("评论失败!");
    }
    }
    
}

// 轮播图

 $(document).ready(function(){
   var i = 0 ;
   var timer;
  $('.item').eq(0).show().siblings('.item').hide();
  showTime();
   
  $('.tab').hover(function(){
    i = $(this).index();
    Show();
    clearInterval(timer);
  },function(){
    showTime();
  });
   
  $('.prev').click(function(){
    clearInterval(timer);
    if(i == 0){
      i = 5;
    }
    i--;
    Show();
    showTime();
  });
   
  $('.next').click(function(){
    clearInterval(timer);
    if(i == 4){
      i = -1;
    }
    i++;
    Show();
    showTime();
  });

function showTime(){
  timer = setInterval(function(){
    Show();
    i++;
    if(i==5){
      i=0;
    }
  },2000);
}
function Show(){
  $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
  $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
}
});
