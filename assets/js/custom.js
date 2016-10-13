(function($) {

    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

})(jQuery);

var vm = new Vue({
    el: "#main",
    mounted: function(){

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        var wow = new WOW({
            mobile: false
        });
        wow.init();

        $(".ajax-popup").magnificPopup({
            type: "ajax",
            callbacks: {
                parseAjax: function(mfpResponse) {
                    $.getScript("assets/js/custom-portfolio.min.js?20161013");
                }
            }
        });
    }
});