$(function(){


    var container = $('.full-bg');

    //window 사이즈가 바뀌면 할일
    $(window).resize(function(){

        var currentWindow = $(this),
            windowWidth = currentWindow.width(),
            windowHeight = currentWindow.height(),
            browerRatio = windowWidth / windowHeight,
            imageRatio = 864/486;

            if(imageRatio > browerRatio){

                container.css({
                    height: '100%',
                    width:windowHeight * imageRatio, //현재 윈도우 높이 * 원래 이미지 비율 
                    //left:(windowHeight * imageRatio - windowWidth)/2,
                    left:(windowWidth - windowHeight * imageRatio)/2, /* 음수가 나오도록  */ //(브라우저 너비 - 이미지 너비)/2
                    top:0
                });
            }else{ //

                container.css({
                    height:windowWidth / imageRatio, //이미지 너비 / 이미지 비율 
                    width:'100%',
                    left:0,
                    top: (windowHeight - windowWidth / imageRatio / ima)/2 //(브라우저 높이 - 이미지 높이)/2
                });
            }



    });//resize
    
    $(window).trigger('resize');

});// document ready 
