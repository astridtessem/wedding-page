import $ from 'jquery'; 

$( document ).ready(function() {
    

    
    $(window).click(function() {
       
            $('#menuToggle input').prop('checked', false);
        

        });
        
        $('#menuToggle input').click(function(event){
            event.stopPropagation();
        });

   

});