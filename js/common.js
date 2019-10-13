$(document).ready(function() {
    $("#header-menu, #toTop, #section_mounting, #section_electrical, #section_painting, #section_roofing")
    .on("click", ".anchor", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    });
});