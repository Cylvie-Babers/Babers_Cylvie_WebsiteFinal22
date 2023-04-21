$(document).ready(function() {
    $('.scale').hover(function(){
        $(this).css("transform","scale(1.2)");
    },
    function(){
        $(this).css("transform","scale(1)");
    }
    )
}) 

$(document).ready(function() {
    $('.translate').hover(function(){
        $(this).css("transform","translateY(-30px)");
        $(this).css("transition","500ms)");
       
    },
    function(){
        $(this).css("transform","translateY(0)");
    }
    )
}) 


$(document).ready(function() {
        $('.fadeonload').each( function(i){
            $(this).animate({'opacity':'1','margin-left':'0px'},1500);
        });
    });
    

        
        
   
        

