$(function(){

    var $aside = $('aside'),
        //$button = $('aside button'); //성능
        $button = $aside.find('button');

        $duration = 300;

    // 버튼을 클릭하면 aside 나오도록 해주세요.
    //javascript 선택자.classList.add = 'open';
    //javascript 선택자.classList.remove = 'open';
    //jquery A.addClass('b c'); A.removeClass(''b); A.toggleClass('b');
    // A.hasClass('b) 조건문에서만 사용. a요소에 b라는 클래스 있으면 true, 없으면 false

    //속셩변경하기, 속성의 값을 반환하기 
    //var c = A.attr('b') = a라는 요소의 b라는 속성의 값을 변수명 c에 저장
    //var c = A.attr('src') = a라는 요소의 src라는 속성의 값을 변수명 c에 저장
    // A.attr('b','c')      = a라는 요소의 b라는 속성의 값을 c로 변경


    console.log($button.find('img').attr('src'));

    $button.click(function(){
        // $aside.stop().animate({left:'0px'},$duration);

        //$aside.addClass('open');

        $aside.toggleClass('open');

        if($aside.hasClass('open')){

            //$aside.stop().animate({left:'0px'},$duration);

            //$aside.stop().animate({left:'0px'},$duration,'easeOutBack');

            //$aside.stop().animate({left:'-70px'},$duration,'easeOutBack');

            //$aside.stop().animate({right:'-70px'},$duration,'easeOutBack'); //cpu 사용 //두뇌까지 가야(모바일에서)
            // transition GPU 사용 //비디오카드


            $button.find('img').attr('src','img/btn_close.png');

        }else{

            //$aside.stop().animate({left:'-350px'},$duration);

            //$aside.stop().animate({left:'-350px'},$duration, 'easeInBack');

            //$aside.stop().animate({right:'-350px'},$duration, 'easeInBack');

            $button.find('img').attr('src','img/btn_open.png');


        }
    });


});