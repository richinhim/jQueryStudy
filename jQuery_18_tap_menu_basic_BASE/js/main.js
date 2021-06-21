$(function () {
	var tabAnchor = $('.tabs-nav li'),
		tabPanel = $('.tabs-panel');
		
	tabAnchor.on('click',function(e){

		e.preventDefault();

		/*
		tabAnchor.find('a').removeClass('active'); //모두 빼고 
		$(this).find('a').addClass('active');      // 그요소만 추가 
		*/
		//var NewLink = $(this).attr('href');
		
		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active');

		tabPanel.hide();

		var $targetIdx = $(this).index();

		console.log($targetIdx); //순번 알아오기 

		tabPanel.eq($targetIdx).show();
		
		/*
		var $target = $(this).attr('href');

		console.log($target);

		$($target).show();
		//$($(this).attr('href')).show();
		*/

	});
	
	//.trigger 방아쇠를 당기다 
	tabAnchor.eq(0).trigger('click');		

});

