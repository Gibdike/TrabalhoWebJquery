$(document).ready(function() {
    $("#fadeIn").click(function() {
        $("#div").fadeIn();
    });
    $("#fadeOut").click(function() {
        $("#div").fadeOut();
    });
    $("#fadeToogle").click(function() {
        $("#div").fadeToggle();
    });
    $("#fadeTo1").click(function() {
        $("#div").fadeTo("fast", 0.5);
    });
    $("#fadeTo2").click(function() {
        $("#div").fadeTo("fast", 1.0);
    });
    $("#hide").click(function() {
        $("#div").hide();
    });
    $("#show").click(function() {
        $("#div").show();
    });

    $("slideDown").click(function() {
        $("#div").slideDown();
    });
    $("#slideUp").click(function() {
        $("#div").slideUp();
    });
    $("#slideDown").click(function() {
        $("#div").slideDown();
    });
    $("#slideUp").click(function() {
        $("#div").slideUp();
    });
    $("#slideToogle").click(function() {
        $("#div").slideToggle();
    });
    $("#animate1").click(function() {
        $("#div").animate({
            "border-radius": "40px",
            "top": "5px",
            "width": "90%",
            "height": "30px"
        });
    });
    $("#animate2").click(function() {
        $("#div").animate({
            "bottom": "0",
            "top": "10px",
            "height": "50px",

        });
    });
});