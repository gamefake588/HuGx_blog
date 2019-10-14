
function shouchang(){
	var shouc1	= document.getElementById('xingxi');
	shouc1.style.color = '#ff8201';
	alert('收藏成功！！！');
}


function shoushuo1(){
	var shouc1	= document.getElementById('shou1');
	var shouc2	= document.getElementById('shou2');
	var text = document.getElementById('asd');
	shouc1.style.backgroundColor = '#ff8201';
	shouc1.style.color = '#fff';
	shouc2.style.backgroundColor = '#fff';
	shouc2.style.color = '#000';
	text.value = '超级日租卡';
}

function shoushuo2(){
	var shouc1	= document.getElementById('shou1');
	var shouc2	= document.getElementById('shou2');
	var text = document.getElementById('asd');
	shouc1.style.backgroundColor = '#fff';
	shouc2.style.color = '#fff';
	shouc1.style.color = '#000';
	shouc2.style.backgroundColor = '#ff8201';
	text.value = '';
}


function hengfugg(){
	var hengfu = document.getElementById('hengfu');
	hengfu.style.display = 'none';
	alert(' 广告已关闭 ！！！');
}



function huanx(){
	var huanx1 = document.getElementById('huanx1');
	var chaogo1 = document.getElementById('chaogo1');
	huanx1.style.display = 'block';
	chaogo1.style.display = 'none';
}

function chaogo(){
	var huanx = document.getElementById('huanx1');
	var chaogo1 = document.getElementById('chaogo1');
	huanx1.style.display = 'none';
	chaogo1.style.display = 'block';
}


function asd1(){
	var one = document.getElementById('wsx1');
	var two = document.getElementById('wsx2');
	var tharr = document.getElementById('wsx3');
	var four = document.getElementById('wsx4');
	one.style.color = '#ff8201';
	two.style.color = '#333';
	tharr.style.color = '#333';
	four.style.color = '#333';
}

function asd2(){
	var one = document.getElementById('wsx1');
	var two = document.getElementById('wsx2');
	var tharr = document.getElementById('wsx3');
	var four = document.getElementById('wsx4');
	one.style.color = '#333';
	two.style.color = '#ff8201';
	tharr.style.color = '#333';
	four.style.color = '#333';
}


function asd3(){
	var one = document.getElementById('wsx1');
	var two = document.getElementById('wsx2');
	var tharr = document.getElementById('wsx3');
	var four = document.getElementById('wsx4');
	one.style.color = '#333';
	two.style.color = '#333';
	tharr.style.color = '#ff8201';
	four.style.color = '#333';
}


function asd4(){
	var one = document.getElementById('wsx1');
	var two = document.getElementById('wsx2');
	var tharr = document.getElementById('wsx3');
	var four = document.getElementById('wsx4');
	one.style.color = '#333';
	two.style.color = '#333';
	tharr.style.color = '#333';
	four.style.color = '#ff8201';
}



function danna1(){
	var yhk = document.getElementById('yhk');
	var kami = document.getElementById('kami');
	kami.style.color = '#ff8201';
	yhk.style.color = '#000';
}

function danna2(){
	var yhk = document.getElementById('yhk');
	var kami = document.getElementById('kami');
	kami.style.color = '#000';
	yhk.style.color = '#ff8201';
}

function aife1(){
	var one = document.getElementById('dianx1');
	var two = document.getElementById('dianx2');
	var tharr = document.getElementById('dianx3');
	var four = document.getElementById('dianx4');
	one.style.display = 'block';
	two.style.display = 'none';
	tharr.style.display = 'none';
	four.style.display = 'none';
}

function aife2(){
	var one = document.getElementById('dianx1');
	var two = document.getElementById('dianx2');
	var tharr = document.getElementById('dianx3');
	var four = document.getElementById('dianx4');
	one.style.display = 'none';
	two.style.display = 'block';
	tharr.style.display = 'none';
	four.style.display = 'none';
}

function aife3(){
	var one = document.getElementById('dianx1');
	var two = document.getElementById('dianx2');
	var tharr = document.getElementById('dianx3');
	var four = document.getElementById('dianx4');
	one.style.display = 'none';
	two.style.display = 'none';
	tharr.style.display = 'block';
	four.style.display = 'none';
}

function aife4(){
	var one = document.getElementById('dianx1');
	var two = document.getElementById('dianx2');
	var tharr = document.getElementById('dianx3');
	var four = document.getElementById('dianx4');
	one.style.display = 'none';
	two.style.display = 'none';
	tharr.style.display = 'none';
	four.style.display = 'block';
}


function dianxg1(){
	var one = document.getElementById('dianxg1_1');
	var two = document.getElementById('dianxg1_2');
	var tharr = document.getElementById('dxjiac');
	var four = document.getElementById('hzjiac');
	one.style.display = 'block';
	two.style.display = 'none';
	tharr.style.fontWeight = '600';
	four.style.fontWeight = '300';
}

function dianxg2(){
	var one = document.getElementById('dianxg1_1');
	var two = document.getElementById('dianxg1_2');
	var tharr = document.getElementById('dxjiac');
	var four = document.getElementById('hzjiac');
	two.style.display = 'block';
	one.style.display = 'none';
	four.style.fontWeight = '600';
	tharr.style.fontWeight = '300';
}


function jktu1(){
	var one = document.getElementById('jiketu1');
	var two = document.getElementById('jiketu2');
	one.style.display = 'none';
	two.style.display = 'block';
}
function jktu2(){
	var one = document.getElementById('jiketu1');
	var two = document.getElementById('jiketu2');
	two.style.display = 'none';
	one.style.display = 'block';
}




// 鼠标经过显示菜单
$(document).ready(function(e){
            $("#sji1").mouseover(function(){
                $(".shub1").show();
            }).mouseout(function(){
                 $(".shub1").hide();            
             })
        });
  $(document).ready(function(e){
            $("#taoc1").mouseover(function(){
                $(".shub2").show();
            }).mouseout(function(){
                 $(".shub2").hide();            
             })
        });
  $(document).ready(function(e){
            $("#kaid1").mouseover(function(){
                $(".shub3").show();
            }).mouseout(function(){
                 $(".shub3").hide();            
             })
        });
  $(document).ready(function(e){
            $("#zhin1").mouseover(function(){
                $(".shub4").show();
            }).mouseout(function(){
                 $(".shub4").hide();            
             })
        });
  $(document).ready(function(e){
            $("#huaf1").mouseover(function(){
                $(".shub5").show();
            }).mouseout(function(){
                 $(".shub5").hide();            
             })
        });
  $(document).ready(function(e){
            $("#feiy1").mouseover(function(){
                $(".shub6").show();
            }).mouseout(function(){
                 $(".shub6").hide();            
             })
        });
  $(document).ready(function(e){
            $("#yeiw1").mouseover(function(){
                $(".shub7").show();
            }).mouseout(function(){
                 $(".shub7").hide();            
             })
        });

