(function ($) {

    "use strict";

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function () {
        $('.page-loader').delay(350).fadeOut('slow');
    });

    $(document).ready(function () {

        /* ---------------------------------------------- /*
         * Initialization general scripts for all pages
        /* ---------------------------------------------- */

        var hero = $('#hero'),
            modules = $('.module-hero, .module, .module-small'),
            navbar = $('.navbar-custom'),
            wrapper = $('.wrapper'),
            footer = $('.footer'),
            mobileTest;

        /* ---------------------------------------------- /*
         * Mobile detect
        /* ---------------------------------------------- */

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        } else {
            mobileTest = false;
        }

        /* ---------------------------------------------- /*
         * Setting background of modules
        /* ---------------------------------------------- */

        modules.each(function () {
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
        });

        /* ---------------------------------------------- /*
         * Parallax
        /* ---------------------------------------------- */

        // if (mobileTest === true) {
        //     $('.module-parallax').css({'background-attachment': 'scroll'});
        // } else {
        //     $('#hero.module-parallax').parallax('50%', 0.2);
        // }

        /* ---------------------------------------------- /*
         * Hero height
        /* ---------------------------------------------- */

        $(window).resize(function () {
            if (hero.length > 0 && hero.hasClass('js-fullheight')) {
                hero.height($(window).height());
            } else if (hero.length > 0) {
                hero.height($(window).height() * 0.7);
            }
        }).resize();

        /* ---------------------------------------------- /*
         * Intro slider setup
        /* ---------------------------------------------- */

        $('#slides').superslides({
            play: 10000,
            animation: 'fade',
            animation_speed: 800,
            pagination: true
        });

        /* ---------------------------------------------- /*
         * Text Rotator
        /* ---------------------------------------------- */

        // $(".rotate").textrotator({
        //     animation: "dissolve",
        //     separator: "|",
        //     speed: 3000
        // });

        /* ---------------------------------------------- /*
         * Transparent navbar animation
        /* ---------------------------------------------- */

        if (navbar.length > 0 && hero.length > 0) {
            $(window).scroll(function () {
                var topScroll = $(window).scrollTop();
                if (topScroll >= 5) {
                    navbar.removeClass('navbar-transparent');
                } else {
                    navbar.addClass('navbar-transparent');
                }
            }).scroll();
        } else {
            navbar.removeClass('navbar-transparent');
        }

        /* ---------------------------------------------- /*
         * Owl sliders
        /* ---------------------------------------------- */

        $('.slider-images').owlCarousel({
            singleItem: true,
            autoHeight: false,
            navigation: true,
            pagination: false,
            autoPlay: 3000,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });

        $('.carousel-clients').owlCarousel({
            singleItem: false,
            autoHeight: false,
            navigation: true,
            pagination: false,
            autoPlay: 3000,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });

        /* ---------------------------------------------- /*
         * Fixed Footer
        /* ---------------------------------------------- */

        $(window).on('resize', function () {
            var width = Math.max($(window).width(), window.innerWidth);

            if (width > 767) {
                wrapper.css('margin-bottom', footer.outerHeight());
            } else {
                wrapper.css('margin-bottom', 0);
            }
        }).resize();

        /* ---------------------------------------------- /*
         * Progress bars, counters animations
        /* ---------------------------------------------- */

        $('.progress-bar').each(function () {
            $(this).appear(function () {
                var percent = $(this).attr('aria-valuenow');
                $(this).animate({'width': percent + '%'});
                $(this).find('.progress-value').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
            });
        });

        $('.counter').each(function () {
            $(this).appear(function () {
                var number = $(this).find('.counter-timer').attr('data-to');
                $(this).find('.counter-timer').countTo({from: 0, to: number, speed: 1500, refreshInterval: 30});
            });
        });

        /* ---------------------------------------------- /*
         * WOW Animation
        /* ---------------------------------------------- */

        var wow = new WOW({
            mobile: false
        });

        wow.init();

        /* ---------------------------------------------- /*
         * Collapse navbar on click
        /* ---------------------------------------------- */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        /* ---------------------------------------------- /*
         * Scroll Animation
        /* ---------------------------------------------- */

        $('.section-scroll').on('click', function (e) {
            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing');

            e.preventDefault();
        });

        /* ---------------------------------------------- /*
         * Scroll top
        /* ---------------------------------------------- */

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.scroll-up').addClass('scroll-top-show');
            } else {
                $('.scroll-up').removeClass('scroll-top-show');
            }
        });

        $('a[href="#totop"]').on('click', function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });

        $("a.project-gallery").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        });

        $(".shareSocial").click(function(t) {
            t.preventDefault();
            var r = $(t.target).data("name");

            var i = {
                encodeUrl: encodeURIComponent(document.URL),
                encodeTitle: encodeURIComponent(document.title)
            };
            
            if (r === "fb")
            {
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + i.encodeUrl + "&amp;t=" + i.encodeUrl)
            }
            else if (r === "tr")
            {
                window.open("https://twitter.com/intent/tweet?text=" + i.encodeTitle + ":%20" + i.encodeUrl);
            }
        })
    });

})(jQuery);
