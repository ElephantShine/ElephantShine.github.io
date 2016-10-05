(function($) {

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

    $(document).ready(function() {

        /* ---------------------------------------------- /*
         * Animated scrolling / Scroll Up
        /* ---------------------------------------------- */

        $('a[href*=#]').bind("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        /* ---------------------------------------------- /*
         * Navbar
        /* ---------------------------------------------- */

        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })

        /* ---------------------------------------------- /*
         * Background image.
        /* ---------------------------------------------- */

        $(".js-height-full").height($(window).height());

        $(window).resize(function() {
            $(".js-height-full").height($(window).height());
        });

        $('#home').backstretch([
            'assets/images/home1.jpg'
            // 'assets/images/home2.jpg',
        ], { duration: 3000, fade: 750 });

        /* ---------------------------------------------- /*
         * Initialize shuffle plugin
        /* ---------------------------------------------- */

        var $portfolioContainer = $('.portfolio-items-container');

        $('#filter li').on('click', function(e) {
            e.preventDefault();

            $('#filter li').removeClass('active');
            $(this).addClass('active');

            group = $(this).attr('data-group');
            var groupName = $(this).attr('data-group');

            $portfolioContainer.shuffle('shuffle', groupName);
        });

        $('.simple-ajax-popup').magnificPopup({
            type: 'ajax',
            callbacks: {
                parseAjax: function(mfpResponse) {
                    $.getScript('assets/js/jquery.fitvids.js');
                    $.getScript('assets/js/custom-portfolio.js');
                },
            }
        });

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
        /* ---------------------------------------------- */

        wow = new WOW({
            mobile: false
        });
        wow.init();

    });

})(jQuery);