$(function () {

    // 스크롤의 양- scrollTop()

    // 화면상단에서 거리  - offset.top

    //addClass
    //removeClass
    //screen reader 

    var wind = $(window),
        header = $('.page-header'),
        headerOffsetTop = header.offset().top;

    console.log(headerOffsetTop);    

    // wind.on('scroll', function(){

    // });

    wind.scroll(function(){

        // if(wind.scrollTop() >= headerOffsetTop){
        if($(this).scrollTop() >= headerOffsetTop){

            header.addClass('sticky');

        }else{

            header.removeClass('sticky');
        }

    });


});
