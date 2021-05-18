$(function(){
    $('.bar').click(function(){
        $('.navbar').toggle() ; 
    });
    /*    $('.bar').click(function(){
      $('.navbar').css("right",'20px') ; $('.navbar').css("transition",'0.8s') ; 
    });*/
    $('.navbar li a').click(function(e){
        e.preventDefault() ; 
        $('html,body').animate({
           scrollTop:$( '#'+ $(this).data('scroll')).offset().top
        }, 2000) ;

    });
});