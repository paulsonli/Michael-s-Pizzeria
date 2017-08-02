//A $(document).ready() block.
/* global $ */ 
$(document).ready(function(){
    $("#myCarousel").carousel({
        interval: 1700        
    });
 
 
 
 // Gallery
    $('ul li').click(function(){ 
        
    var clicked_href = $(this).children('a').attr('href');
    $("li").removeClass("active");
    $(this).addClass("active"); 
  
    $('.carousel-inner').hide();
    $('#ssBackground').hide();
    
    $('about').hide();
    
    
    
    $(clicked_href).show();
     
  });
 
 




 
 
});