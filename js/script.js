$(document).ready(

  function() { 

    $("html").niceScroll({
		cursorcolor:"#777",
		cursorwidth:5,
		scrollspeed:40,
		cursorborderradius:'0',
		mousescrollstep:40,
		cursoropacitymin:0,
		cursoropacitymax:1,
		background:"#eee",
		cursorborder:"none",
		autohidemode:false,
		boxzoom:true,
		zindex:99999

	});
  }

);



$(function(){	

	$('#gnb .inner_gnb li > a').bind('click',function(e){
		e.preventDefault(); // 링크값 없애기
		
	    var posY = $($(this).attr('href')).position().top;
		// posY변수에 클릭한 a태그의 attr(속성)중에서 href값을 찾고(예_#scene01) 위치값을 저장
		$('.mainSlides').stop().animate({'scrollTop':posY},1200, 'easeInOutExpo');
		
		// body, html의 스크롤을 애니메이션을 이용해서 posY값으로 이동한다

	})

	$(window).scroll(function(){ 
		var scrollTop = $(document).scrollTop() ; 
		$('.posNum').text(scrollTop);


		/** Animation **/
		$('#scene01 .box01').stop().animate({'margin-top':((scrollTop)*1)}, 300)	 // scrollTop(스크롤값) * 1 = 스크롤값 동일  ※ *0.5는 스크로값의 반값
		$('#scene01 .box02').stop().animate({'opacity':((scrollTop)*0.005)}, 300)



	});





});