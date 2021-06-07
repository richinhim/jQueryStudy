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

    $('#typo .inner').css({
        textDecoration: 'underline' ,
        borderBottom:'5px solid red',
        transform:'rotate(45deg)',
        opacity: 0.5
    });

});

 // $('h1').css({'color':'red'});
