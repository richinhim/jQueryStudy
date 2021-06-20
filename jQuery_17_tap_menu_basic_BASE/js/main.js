$(function () {

    var tabAnchor = $('.tabs-nav li a'),
        tabPanel  = $('.tabs-panel');

        //링크를 클릭하면 할일
        tabAnchor.click(function(e){

            e.preventDefault();//링크의 기본속성은 막아야

            tabAnchor.removeClass('active');// 모두 빼고 

            $(this).addClass('active'); // 그요소만 추가 
            
            //그 요소에만 active를 추가하고 나머지 요소에서 뺀다.
            //$(this).addClass('active').siblings().removeClass('active'); //여기서는 쓸수가 없다.

            tabPanel.hide();

            //Work 01 클릭하면 $('#work01').show();
            //Work 02 클릭하면 $('#work02').show();
            //Work 03 클릭하면 $('#work03').show();

            //$('#work02').show();

            // var c = A.attr('href');
            
            var $target = $(this).attr('href');
            
            console.log($target);

            //$('#work01').show();
            $($target).show();      
            

        });
});

