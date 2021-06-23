$(function(){

    var $selectEmail    = $('.select_domain'),
        $targetInput    = $('.email_domain'),
        $count          = $('.count'),
        //$unitPrice      = parseInt(($('.unitprice').attr('data-unitprice')),
        //$unitPrice      = $('.unitprice').text(),
        $unit = $('.unitprice').text(),
        //A.replace(B,C)

        $unitPrice      = parseInt($unit.replace(',','')),
        $currentNumber  = parseInt($('.count').text()),
        $total          = $('.total');

        console.log($currentNumber);

        // parseInt(값) 값을 숫자(정수) 변환

        $('span a').click(function(e){
            
            e.preventDefault();

            if($(this).hasClass('plus')){
                //$currentNumber =  $currentNumber +1;
                $currentNumber += 1;

            }else{
                
                if($currentNumber > 0){
                    $currentNumber -= 1;    
                }
                
            }

            console.log($currentNumber);

            $count.text($currentNumber);

            var semiTotal = $unitPrice * $currentNumber;
            

            //var total  = Number(semiTotal).toLocaleString('en'); javascript

            //https://github.com/customd/jquery-number

            //$total.text(semiTotal);
            //$total.text(total);
            $total.text(semiTotal);

            $('.number').number(true);


        });// 버튼 클릭할 일 

        $('.number').number(true);

        
        $selectEmail.change(function(){

            var domain = $(this).val();

            console.log(domain);

            $targetInput.val(domain); 

            
        });

});// document ready jquery 

