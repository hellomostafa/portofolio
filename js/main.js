(function($) {
    "use strict";

    $(document).ready(function($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

         $('.isotope-wrap').isotope({
            // options
            itemSelector: '.isotope-item'
        });

        $('.isotope-menu li').click(function () {

            var selector = $(this).attr('data-filter');

            $('.isotope-wrap').isotope({
                // options
                filter: selector
            });

        });
        
     

      
      



    });
    
    jQuery(document).ready(function($){
        $('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller();
        $('#bar4').barfiller();
        $('#bar5').barfiller();
        $('#bar6').barfiller();
    })
    
    
    $(document).ready(function(){
        
        $("#link1").click(function(){
          $path=$("#welcome").offset().top;
            $('body').animate({scrollTop:$path}, 1000);
        });
    
        $("#link2").click(function(){
          $path=$("#about").offset().top;
            $('body').animate({scrollTop:$path}, 1000);
        });

        $("#link3").click(function(){
          $path=$("#service").offset().top;
            $('body').animate({scrollTop:$path}, 1000);
        });

        $("#link4").click(function(){
          $path=$("#work").offset().top;
            $('body').animate({scrollTop:$path}, 1000);
        });

        $("#link5").click(function(){
          $path=$("#skills").offset().top;
            $('body').animate({scrollTop:$path}, 1000);
        });

        $("#link6").click(function(){
          $path=$("#footer").offset().top;
            $('body').animate({scrollTop:$path}, 1000);
        });
    })


    jQuery(window).load(function() {


    });


}(jQuery));