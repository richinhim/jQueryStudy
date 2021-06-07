// document.getElementsByTagName('h1')[0].style.color = 'red';

/*
document.addEventListener('DOMContentLoaded', function(){
    document.getElementsByTagName('h1')[0].style.color = 'red';
});
*/

/*
$(document).ready(function(){
    
    $('h1').css({'color':'red'});
});

아래쪽 5px 두깨 실선 red 
#typo .inner {border-bottom: 5px solid red;}

#typo .inner {transform: rotate(45deg);}

글씨의 투명도를 50%
#typo .inner {opacity: 0.5;}
*/

$(function(){
    
    // $('h1').css({'color':'red'});
    $('h1').css('color', 'red'); // css 속성 하나를 변경 

    // h1 {color:red;}
    // #typo .inner {text-decoration:underline;}
    /*
    $('#typo .inner').css('text-decoration','underline');

    $('#typo .inner').css('border-bottom','5px solid red');

    $('#typo .inner').css('transform','rotate(45deg)');

    $('#typo .inner').css('opacity', 0.5);
    */

    /*
    $('#typo .inner').css({
        'text-decoration': 'underline' ,
        'border-bottom':'5px solid red',
        'transform':'rotate(45deg)',
        'opacity': 0.5
    });
    */

    /* $('#typo .inner').css({
        textDecoration: 'underline' ,
        borderBottom:'5px solid red',
        transform:'rotate(45deg)',
        opacity: 0.5
    }); */

 
    //실행 지점 제어 - evnet 종료 - mouseover 마우스가 올라왔을 때.
    // on메서드, bind('click'...) ---> .on .off
    
    //$('선택자').on('이벤트 종류', 할일);
    // 할일 = 임의 함수 = function(){}

    /*
    $('#typo').on('mouseover', function name() {
        
        //아이디 typo의 배경색을 green
        $('#typo').css('background-color','green');

    }); //typo mouseover

    

    $('#typo').on('mouseout', function name() {
        
        //아이디 typo의 배경색을 green
        $('#typo').css('background-color','#3498db');

    }); //typo mouseout
    */

    // chain method, method chain 

    /*
    $('#typo').on('mouseover', function name() {        
        //아이디 typo의 배경색을 green
        $('#typo').css('background-color','green');
    })
    .on('mouseout', function name() {        
        //아이디 typo의 배경색을 green
        $('#typo').css('background-color','#3498db');
    }); //typo mouseout
    */

    /*
    $('#typo').mouseover(function name() {        
        //아이디 typo의 배경색을 green
        $('#typo').css('background-color','green');
    })
    .mouseout(function name() {        
        //아이디 typo의 배경색을 원래대로 
        $('#typo').css('background-color','#3498db');
    }); //typo mouseout
    */

    //h1:hover , #typo : hover  {background-color:green;}
    /*
    $('#typo, h1').mouseover(function name() {        
        //아이디 typo의 배경색을 green
        $('#typo, h1').css('background-color','green');
    })
    .mouseout(function name() {        
        //아이디 typo의 배경색을 원래대로 
        $('#typo, h1').css('background-color','#3498db');
    }); //typo mouseout
    */

    //h1:hover , #typo : hover  {background-color:green;}
    //이벤트가 일어난 그거 this
    $('#typo, h1').mouseover(function name() {        
        //아이디 typo의 배경색을 green
        $(this).css('background-color','green');
    })
    .mouseout(function name() {        
        //아이디 typo의 배경색을 원래대로 
        $(this).css('background-color','#3498db');
    }); //typo mouseout


});

 // $('h1').css({'color':'red'});
