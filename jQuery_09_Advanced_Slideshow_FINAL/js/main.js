$(function () {
    
  var container  =   $('.slideshow'),
      //slideGroup = $('.slideshow .slideshow_slides')
      slideGroup =   container.find('.slideshow_slides'),
      slides     =   slideGroup.find('a'),
      nav        =   container.find('.slideshow_nav'),
      
      indicator  =   container.find('.indicator'),
      slideCount =   slides.length,
      
      indicatorHtml = '',
      currentIndex  = 0,
      duration      = 500,
      easing        = 'easeInOutExpo',
      interval      = 3500,
      timer;

      //수도 코드 작성
      //슬라이드를 가로로 배열 
      //slides 마다 할일, left 0%, 100%, 200%, 300%

      console.log(slides);

      slides.each(function(i){
        var newLeft = i * 100 + '%';
        $(this).css({left: newLeft});

        // <a href="" >1</a>
        // var i = 2; i = i +2; i+=2
        // indicatorHtml = indicatorHtml +??
        //indicatorHtml += ??;
        indicatorHtml += '<a href="" >' + (i+1) + '</a>';
      
        //console.log(indicatorHtml);


      });//slides.each
      //A.text(B); a요소의 내용을 글씨 형태로 추가 
      //A.html(B); a요소의 내용을 html 형태로 추가

      console.log(indicatorHtml);

      //console.log("indicator="+container.html());

      indicator.html(indicatorHtml);
      $('.indicator').html(indicatorHtml);
      //indicator.html("<span class='red'>Hello <b>Again</b></span>" );

      //console.log("indicator="+ $('.indicator').html());
      

});