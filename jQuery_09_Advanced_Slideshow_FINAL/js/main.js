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
        indicatorHtml += '<a href="">' + (i+1) + '</a>';
      
        console.log(indicatorHtml);


      });//slides.each
      //A.text(B); a요소의 내용을 글씨 형태로 추가 
      //A.html(B); a요소의 내용을 html 형태로 추가

      console.log(indicatorHtml);

      
      //console.log("indicator="+indicator.html());
      //$('.indicator').html(indicatorHtml);

      indicator.html(indicatorHtml);

      //슬라이드 이동함수 
      function goToSlide(index){

        //i 0 left:0%, i 1 left:-100%, i 2 left:-200%

        slideGroup.animate({left:-100*index + '%'}, duration, easing);
        currentIndex = index;

        console.log(currentIndex);

        updateNav();//처음인지, 마지막인지 검사. active 

        

      }
      
      //goToSlide(1);
      
      //인디케이터로 이동하기 
      indicator.find('a').click(function(e){
        e.preventDefault(); //a 링크 이벤트 prevent

        var idx = $(this).index();//클릭한 a tag의 index
        console.log(idx);

        goToSlide(idx);
                
      });

      function updateNav(){

        var navPrev = nav.find('.prev');
        var navNext = nav.find('.next');
        //처음   currentIndex 0, 이전버튼이 안보이도록 
        if(currentIdex == 0 ){
          navPrev.addClass('disabled');
        }else{
          navPrev.removeClass('disabled');
        }
        
        //마지막 currentIndex 3, 다음버튼이 안보이도록 
        if(currentIdex == slideCount - 1 ){
          navNext.addClass('disabled');
        }else{
          navNext.removeClass('disabled');
        }

        //1.모든 요소에서 active 빼고, 원하는 요소에만 active 추가
        // indicator.find('a').removeClass('active');

        // //요소순번 선택 .eq(숫자)        
        // indicator.find('a').eq(currentIndex).addClass('active');

        

        //2.원하는 요소에만 active 추가하고 나머지들에서 active 빼기
        // 형제 자매는 영어로? siblings
        indicator.find('a').eq(currentIndex).addClass('active')
        .siblings().removeClass('active');     


      }//updateNav()

      //좌우버튼으로 이동하기 
      //다음버튼 클릭 currentIdex+1 -> goToSlide(?)
      //이전버튼 클릭 currentIdex-1 -> goToSlide(?)
      
      /*
      nav.find('.prev').click(function(e){

        e.preventDefault(); //a 링크 이벤트 prevent

        //var i = currentIndex -1;

        goToSlide(currentIndex -1);
      });

      nav.find('.next').click(function(e){

        e.preventDefault(); //a 링크 이벤트 prevent

        //var i = currentIndex + 1;

        goToSlide(currentIndex + 1);

      });
      */

      nav.find('a').click(function(e){

        e.preventDefault(); //a 링크 이벤트 prevent

        if($(this).hasClass('prev')){ //이전버튼 

          goToSlide(currentIndex - 1);

        }else{ //다음버튼

          goToSlide(currentIndex + 1);
        }


      });

      //바로 실행 
      //처음 시작시 prev 사라지도록, next도 사라지도록 함 
      updateNav();
      
      //자동 슬라이드 함수 
      function startTimer(){
          //일정시간 마다 할일
          //setInterval(할일, 시간), clearInterval(이름);
          //할일(함수) function(){실제로 할일}

          timer = setInterval(function(){


            //nextIndex c0 n1, c1 n2,....c3 n0
            // (0+1) % 4 = 1,..... (3+1) % 4 = 0  
            var nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
          }, interval)
      }

      startTimer();

      function stopTimer(){

        clearInterval(timer);

      }

      container.mouseenter(function(){

        stopTimer();

      }).mouseleave(function(){

        startTimer();
      });



});