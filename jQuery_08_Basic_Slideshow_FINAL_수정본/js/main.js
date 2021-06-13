
//일정시간마다 할일
//첫번째 이미지 스윽
// 사라지고 두번째 이미지 스윽
//...
//마지막 이미지 스윽
// 첫번째...

$(function(){

  //변수지정
  var slides = $('.slideshow img'),
      slideCount = slides.length,
      currentIndex = 0;

      // console.log(slides);

      // 해당시간이 지나면 한번만 할일
      // va timer = setTimeout(할일,1000);
      // clearTimeout(timer);

      // 일정시간 마다 할일
      // var timer = setInterval(할일,시간);
      // clearInterval(timer);

      //jquery 집합개체(object)중 특정번째 요소를 선택 .eq(숫자)
      // eq = equivalent 동등한 , 
      
      // 요소를 서서히 나타나도록 .fadeIn() 
      // 요소를 서서히 사리지도록 .fadeOut() 

      //slides.eq(0).fadeIn();
      slides.eq(currentIndex).fadeIn();


      //var timer = setInterval(showNextSlide,3500);

      // clearInterval(timer);

      var timer = undefined;  //타이머의 값을 undefined(지정되어 있지 않다)라고 지정합니다.
			
		  if (timer == undefined) { //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
			  timer = setInterval(showNextSlide, 3500);
		  }   

      function showNextSlide(){

        /*
        // 현재 슬라이드가 사라지고
        slides.eq(0).fadeOut();
        // 다음 슬라이드가 나타난다.
        slides.eq(1).fadeIn();
        */

        // currentIdex 0 nextIndex 1, currentIdex 1 nextIndex 2 , currentIdex 2 nextIndex 3, , currentIdex 3 nextIndex 0

        // slideCount 4
        // 7 % 2 = 1    2로 나눈 나머지 

        var nextIndex = (currentIndex + 1) % slideCount;

        slides.eq(currentIndex).fadeOut();
        slides.eq(nextIndex).fadeIn();

        currentIndex = nextIndex;

        //console.log(currentIndex);


      } // showNextSlide
      
      function timeron(){
        //setInterval(showNextSlide,3500);

        if (!timer) { //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
            timer = setInterval(showNextSlide, 3500);
        } 
      }

      function timeroff(){
        
        //clearInterval(timer);
        if (timer) { //타이머의 값이 있으면 즉 setInterval(showNextSlide, 3500)값이 있으면 클리어하고 값을 다시 undefined로 저장.
          clearInterval(timer);
          timer = undefined;				
        }	
      }

      slides.mouseover(function(){
        //clearInterval(timer);
        timeroff();
      })
      .mouseout(function(){
        //setInterval(showNextSlide,3500);
        timeron();
      });
});

/*
$(function () {
    // 변수지정
        var slides = $('.slideshow img'), 
            slideCount = slides.length, 
            currentIndex = 0; 

            slides.eq(currentIndex).fadeIn();			
			
		var timer = undefined;  //타이머의 값을 undefined(지정되어 있지 않다)라고 지정합니다.
			
		if (timer == undefined) { //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
			timer = setInterval(showNextSlide, 3500);
		}         

            function showNextSlide(){

              var nextIndex = (currentIndex + 1) % slideCount;

              slides.eq(currentIndex).fadeOut();
              slides.eq(nextIndex).fadeIn();
              currentIndex = nextIndex;

              console.log(currentIndex);

            }

            function timeron(){
			if (!timer) { //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
				timer = setInterval(showNextSlide, 3500);
			  } 
            }
            function timeroff(){
			  if (timer) { //타이머의 값이 있으면 즉 setInterval(showNextSlide, 3500)값이 있으면 클리어하고 값을 다시 undefined로 저장.
				clearInterval(timer);
				timer = undefined;				
			  }	
            }

            slides.mouseenter(function(){
              timeroff();
            })
            .mouseleave(function(){
              timeron();
            })


});
*/