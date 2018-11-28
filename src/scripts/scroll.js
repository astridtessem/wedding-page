import $ from 'jquery'; 

$( document ).ready(function() {


    $(".scrollBtn").on('click', function() {
        // target element id
        
        var id = $(this).attr('data-scrollTo');
    
        // target element
        var $id = $("#"+id);
        if ($id.length === 0) {
            return;
        }
    
        // prevent standard hash navigation (avoid blinking in IE)
        
    if($(window).width()>=770){
        var pos = $id.offset().top - 60;
    }
    else{
        var pos = $id.offset().top ;
    }
        // top position relative to the document
        
    
        // animated top scrolling
        $('body, html').animate({scrollTop: pos},700);
    });

});