$(document).ready(function() {
    
    /* For the sticky navigation */
    
    $('.js--section-resume').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '45px;'
    });
    
    /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile nav */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav'); 
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
        
        
        ion-close-round
    });
    
});

