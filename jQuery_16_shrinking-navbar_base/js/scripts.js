/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $smallLogo =  'images/logo-shrink.svg';

    $window.scroll(function(){

        if($(this).scrollTop() > 100){
            if(!$mainHeader.hasClass('shrink')){

                $mainHeader.addClass('shrink');
                switchImages($smallLogo);
            }
        }else{

            if($mainHeader.hasClass('shrink')){

                $mainHeader.removeClass('shrink');
                switchImages($defaultLogo);
            }
        }
    });

    //switchImages 함수

    function switchImages(newPath){

        var $logo =  $('#logo');

        $logo.fadeOut(300, function(){

            //var c = A.attr('src') ;
            // A.attr('src', 'c');
            $logo.attr('src', newPath);

            $logo.fadeIn(300);

        }); //jquery fadeout  https://api.jquery.com/fadeout/


    }

/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

