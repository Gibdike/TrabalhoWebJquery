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
        $("#div").hide('slow');
    });
});