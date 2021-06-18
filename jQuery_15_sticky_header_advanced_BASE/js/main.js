$(function () {

    //내용 복사
    //내용 추가(삽입)
    //offset().top
    //내용의 높이

    var $window = $(window),
        $header = $('.page-header'),
        $headerClone = $header.contents().clone(),                            //복사한 컨테츠의 내용 
        $headerCloneContainer = $('<div class="page-header-clone"></div>'), //jquery 객체화 
        $threshold = $header.offset().top + $header.outerHeight();


        console.log($headerClone);

        console.log($headerCloneContainer);

        // console.log($header.offset().top);
        // console.log($header.outerHeight());

        console.log($threshold);


        //A.append(B)

        $headerCloneContainer.append($headerClone);


        console.log($headerCloneContainer);


        //A.appendTo(B)
        $($headerCloneContainer).appendTo('body');

        // $.window.scroll(function(){

        //     if($(this).scrollTop() >= $threshold ){
                
        //         $($headerCloneContainer).addClass('visible');
        //     }else{
        //         $($headerCloneContainer).removeClass('visible');
        //     }
        // });

        //성능 개선

        // $.window.on('scroll', $.throttle(1000/15 , function(){ //초당 15번만 검사하라.(스크롤양을 검사하라)

        //     if($(this).scrollTop() >= $threshold ){
                
        //         $($headerCloneContainer).addClass('visible');
        //     }else{
        //         $($headerCloneContainer).removeClass('visible');
        //     }
        // }));


        $window.scroll($.throttle(1000/15 , function(){ //초당 15번만 검사하라.(스크롤양을 검사하라)

            if($(this).scrollTop() >= $threshold ){
                
                $($headerCloneContainer).addClass('visible');
            }else{
                $($headerCloneContainer).removeClass('visible');
            }
        }));



});
