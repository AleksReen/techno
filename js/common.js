$(document).ready(function() {
    $("#header-menu, #toTop, #section_mounting, #section_electrical, #section_painting, #section_roofing, #section_wood, #section_rigging, #section_welding, #section_other")
    .on("click", ".anchor", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 700);
    });
});


$(function() {
    $('.header__conteiner-link a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $('.navbar-toggle').trigger( "click" );
        }
    });
});