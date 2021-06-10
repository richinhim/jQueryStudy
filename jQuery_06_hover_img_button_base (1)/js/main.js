$(function(){

    var $duration = 300,
        $button = $('#buttons2 button');

        
        /*
        var $buttons = document.getElementsByTagName('button');//자바스크립트 button선택

        console.log($buttons);
        //$buttons[0].style.top = '-40';
        //$buttons[1].style.top = '0';

        //버튼들의 높이 -40, 0, 40, 80, 120.....
        // 자바스크립트 요소들마다할 일
        // i 0 -40,  i 1  0 , i 2 40

        for(var i = 0; i <=$buttons.length;i++ ){
            console.log(i);
            $buttons[i].style.top = i*40 - 40 + 'px';
        }
        */

        
        $button.each(function(idx){

            //console.log(idx);

            //선택자.css({속성:값,속성:값});
            var newTop = idx*40 - 40 + 'px';
            $(this).css({top:newTop});
        })
        .mouseover(function(){
            $(this).stop().animate({backgroundColor:'yellow', color:'#000'}, $duration);
            $(this).find('img:first-child').stop().animate({opacity:0}, $duration);
            $(this).find('img:nth-child(2)').stop().animate({opacity:1}, $duration);

        })
        .mouseout(function(){
            $(this).stop().animate({backgroundColor:'#fff', color:'#01b169'}, $duration);
            $(this).find('img:first-child').stop().animate({opacity:1}, $duration);
            $(this).find('img:nth-child(2)').stop().animate({opacity:0}, $duration);

        });       
        
    
});