$(window).on("scroll", function() {
    if($(window).scrollTop() > $(window).height()-(0.07*$(window).height())){
        $(".header").addClass("headerActive");
        $(".headerButton").addClass("active");
        $(".buttonList").addClass("activeBorder");
    } else {
       $(".header").removeClass("headerActive");
       $(".headerButton").removeClass("active");
       $(".buttonList").removeClass("activeBorder");
    }
});

$("#workButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".workSection").offset().top+2},
        'slow');
});

$("#aboutButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".aboutSection").offset().top},
        'slow');
});

$("#contactButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".contactSection").offset().top},
        'slow');
});