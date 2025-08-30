$(window).on("scroll", function() {
    if($(window).scrollTop() > $(window).height()-(0.07*$(window).height())){
        $("header").addClass("header-active");
        $(".header-button").addClass("active");
        $(".header-links").addClass("activeBorder");
    } else {
       $(".header").removeClass("header-active");
       $(".header-button").removeClass("active");
       $(".header-links").removeClass("activeBorder");
    }
});

$("#prof-work-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".prof-work-section").offset().top+2},
        'slow');
});

$("#projects-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".personal-projects-section").offset().top+2},
        'slow');
});

$("#skills-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".skills-section").offset().top},
        'slow');
});

$("#contact-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-section").offset().top},
        'slow');
});