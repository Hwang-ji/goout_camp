
var saveIdx = 0;
$(function(){	

	$('.darkBg').css({'opacity':'0.5'});
	$('.menu li > a, .scene01 .innerMenu > li a').click(function(){
		var idx = $(this).parent().index();
		if(saveIdx > idx){
			$('.scene02 .campingcar1').removeClass('down');
		}else{
			$('.scene02 .campingcar1').addClass('down');
		}
		saveIdx = idx;
	    var posY = $($(this).attr('href')).position().top;
		if(idx == 0){
			$('html, body').stop().animate({'scrollTop':posY+300},1600*(saveIdx+2), 'easeOutQuart');
		}else{
			$('html, body').stop().animate({'scrollTop':posY},1600*(saveIdx+2), 'easeOutQuart');
		}
		return false;

	})
	
	
	$('h1 a').click(function(){
		var idx = $(this).parent().index();
		if(saveIdx > idx){
			$('.scene02 .campingcar1').removeClass('down');
		}else{
			$('.scene02 .campingcar1').addClass('down');
		}		
	    var posY = $($(this).attr('href')).position().top;
		$('html, body').stop().animate({'scrollTop':posY},2600*(saveIdx+2), 'easeOutQuart');
		return false;

	})

		
	$('.overBtn a').click(function(){
		var path = $(this).attr('href');
		$('.scene05 .submap1 img').attr({'src':path});
		return false;

	})
	
		
	$('.popBtn').click(function(){
		var path = $(this).attr('href');
		$('.darkBg').stop().fadeIn(400);
		$('.popBox').stop().delay(400).fadeIn(400);
		$('.popBox .innerPop img').attr({'src':path});
		return false;

	})
	$('.popBox .closePop').click(function(){
		$('.darkBg, .popBox').hide();
		return false;
	})
		
	
	var ani01 = $('.scene01 .cloud1');
	TweenMax.to(ani01, 3, {css:{left:"48%"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
		
	var ani02 = $('.scene01 .cloud2');
	TweenMax.to(ani02, 4, {css:{left:"53%"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	var ani03 = $('.scene01 .cloud3');
	TweenMax.to(ani03, 4, {css:{left:"48%"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});

	var ani04 = $('.scene01 .balloon1');
	TweenMax.to(ani04, 2, {css:{top:"248px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	var ani05 = $('.scene01 .balloon2');
	TweenMax.to(ani05, 2, {css:{top:"450px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	var ani06 = $('.scene01 .cloud4');
	TweenMax.to(ani06, 3, {css:{left:"48%"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	var ani07 = $('.scene01 .cloud5');
	TweenMax.to(ani07, 4, {css:{left:"53%"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	
	var ani08 = $('.scene01 .cloud6');
	TweenMax.to(ani08, 4, {css:{left:"47%"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});

	


});




function frameAni(aniName){
	var idx = 0;
	var total = $(aniName).children().length;
	var downup=0;

	function frameImage(){
		if(idx < total && downup == 0 ){
			idx++;
			if(idx == total){
				idx = 0;
			}

		}
		console.log(aniName + idx);
		$(aniName).children().hide().eq(idx).show();

		setTimeout(frameImage, 250);

	};
	frameImage();
};






$(function(){	// document ready, 페이지 열렸을때 실행 

	frameAni('#ani01');
	frameAni('#ani02');

	$('.popBox .closePop').css({'opacity':'0'});

	jQuery.extend(jQuery.easing, {
		easeOutQuint: function(x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		}
	});

	var wheel = false,
		$docH = $(document).height() - $(window).height(),
		$scrollTop = $(window).scrollTop();

	var leftNum = 1;
	$(window).on('scroll', function() {
		var scrollNum  = $(window).scrollTop();
		//$('.posNum').text(scrollNum);
		if (wheel === false) {
			$scrollTop = $(this).scrollTop();
		}
		
		if(scrollNum >= 854){
			$('.header').addClass('on');	
			if(scrollNum >=5310){
				$('.header').stop().animate({'bottom':'150px'}, 300);	
			}else{
				$('.header').stop().animate({'bottom':'8px'}, 300);	
			}
		}else{
			$('.header').removeClass('on');		
		}
		
		
		if(scrollNum > 1800 && scrollNum < 2350){
			$('.scene02 .campingcar1 p').removeClass('leftCar');
			$('.scene02 .campingcar1').css({'margin-top':((scrollNum-1800)*1.2)})
		}
		

		if(scrollNum > 2350 && scrollNum < 2550){
			$('.scene02 .campingcar1 p').addClass('leftCar');
			if(leftNum==1 && $('.campingcar1').hasClass('down')){
				leftNum=0;
				$('.scene02 .campingcar1 p').animate({'left':'-890px'}, 600)
			}else if(leftNum==0 && $('.campingcar1').hasClass('down') != true){
				leftNum=1;
				$('.scene02 .campingcar1 p').animate({'left':'-0'}, 600)
			}
		}
		
		
		if(scrollNum > 2550 && scrollNum < 3370){
			$('.scene02 .campingcar1 p').removeClass('leftCar');
			$('.scene02 .campingcar1 p').removeClass('rightCar');
			$('.scene02 .campingcar1').css({'margin-top':((scrollNum-1980)*1.2)})
		}
		
		
		
		if(scrollNum > 3370 && scrollNum < 3570){
			$('.scene02 .campingcar1 p').addClass('rightCar');
			if(leftNum==0 && $('.campingcar1').hasClass('down')){
				leftNum=1;
				$('.scene02 .campingcar1 p').animate({'left':'0px'}, 600)
			}else if(leftNum==1 && $('.campingcar1').hasClass('down') != true){
				leftNum=0;
				$('.scene02 .campingcar1 p').animate({'left':'-890px'}, 600)
			}
		}
		
				
		if(scrollNum > 3550 && scrollNum < 4380){
			$('.scene02 .campingcar1 p').removeClass('rightCar');
			$('.scene02 .campingcar1 p').removeClass('leftCar');
			$('.scene02 .campingcar1').css({'margin-top':((scrollNum-2180)*1.2)})
		}
		
		if(scrollNum > 4380 && scrollNum < 4680){
			$('.scene02 .campingcar1 p').addClass('leftCar');
			if(leftNum==1 && $('.campingcar1').hasClass('down')){
				leftNum=0;
				$('.scene02 .campingcar1 p').animate({'left':'-700px'}, 600)
			}else if(leftNum==0 && $('.campingcar1').hasClass('down') != true){
				leftNum=1;
				$('.scene02 .campingcar1 p').animate({'left':'0'}, 600)
			}
		}
		
		
		
				
		if(scrollNum <= 2114){
			saveIdx = 0;	
		}		
		if(scrollNum >= 2114){
			saveIdx = 1;	
		}		
		if(scrollNum >= 3216){
			saveIdx = 2;	
		}
		if(scrollNum >= 4216){
			saveIdx = 3;	
		}
		if(scrollNum >= 5144){
			saveIdx = 4;	
		}
		
		
	});
	$(document).on('DOMMouseScroll mousewheel', function(e, delta) {
		delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;
		wheel = true;
		var scrollNum  = $(window).scrollTop();

			if (delta < 0) {		
				$('.scene02 .campingcar1').addClass('down');
				console.log('down');
			}
			else {			
				console.log('up');	
				$('.scene02 .campingcar1').removeClass('down');
			}

		$scrollTop = Math.min($docH, Math.max(0, parseInt($scrollTop - delta * 30)));
		$($.browser.webkit ? 'body' : 'html').stop().animate({
			scrollTop: $scrollTop + 'px'
		}, 1000, function() {
			wheel = false;
		});
		return false;
	});
});





