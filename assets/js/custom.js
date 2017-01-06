(function($) {

    var homeImgs = [
        'assets/images/home01.png?v=20161014',
        'assets/images/home02.png?v=20161014',
        'assets/images/home03.png?v=20161014'
    ];

    var hashs = [
        "Flower-Fruit-Downshifting",
        "Interior-Flower-Life",
        "Ocean-Taiwan",
        "Taishin-Arts",
        "Food-Fun",
        "Agile-Tour-Taichung-2015",
        "Opera-Legend-Der-Ring-des-Nibelungen",
        "My-First-Piano-Theory",
        "JOJO-Bridal-Atelier",
        "Agile-Tour-Taichung-2017"
    ]

    var utility = {
        encodeUrl : encodeURIComponent(document.URL),
        encodeTitle : encodeURIComponent(document.title)
    }
    
    // loading
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

    $(document).ready(function() {

        AnimatedScrolling(); 
        Banner();
        Header();
        Portfolio();
        WowAnimation();
        ShareSocial();
        GetHashPortfolio();
    });

    function AnimatedScrolling(){      

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

        $('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});
    }

    function Banner(){
        $(".banner-height-full").height($(window).height());

        $(window).resize(function() {
            $(".banner-height-full").height($(window).height());
        });

        $('#home').backstretch(homeImgs, { duration: 3000, fade: 750 });

    }

    function Header(){
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        });
    }

    function Portfolio(){
        var $portfolioContainer = $('.portfolio-items-container'),
            $imgs = $portfolioContainer.find('img'),
            imgLoad;

        imgLoad = new imagesLoaded($imgs.get());
        imgLoad.on('always', function(){
            
            // Adds visibility: visible;
            $portfolioContainer.addClass('images-loaded');

            // Initialize shuffle
            $portfolioContainer.shuffle({
                itemSelector: '.portfolio-item',
                delimeter: ' '
            });
        });

        $('#filter li').on('click', function(e) {
            e.preventDefault();

            $('#filter li').removeClass('active');
            $(this).addClass('active');

            group = $(this).attr('data-group');
            var groupName = $(this).attr('data-group');

            $portfolioContainer.shuffle('shuffle', groupName);
        });


        $(".ajax-popup").magnificPopup({
            type: "ajax",
            callbacks: {
                parseAjax: function(mfpResponse) {
                    $.getScript("assets/js/custom-portfolio.js?v=20161014");
                }
            }
        });
    }

    function WowAnimation(){
        wow = new WOW({
            mobile: false
        });
        wow.init();
    }

    function ShareSocial(){
        $(".shareSocial").click(function(e){
            e.preventDefault();            
            var name = $(e.target).data("name");
            if(name === "fb"){
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + utility.encodeUrl + '&amp;t=' + utility.encodeUrl);
            }else if(name === "tr"){
                window.open( 'https://twitter.com/intent/tweet?text=' + utility.encodeTitle + ':%20' + utility.encodeUrl);
            }else if(name === "g+"){
                window.open( 'https://plus.google.com/share?url=' + utility.encodeUrl);
            }
        });
    }

    function GetHashPortfolio(){
        var hashStr = window.location.hash;

        if(!hashStr
            || hashs.indexOf(hashStr.substr(1)) < 0){
            return;
        }

        $(hashStr).magnificPopup({
            type: "ajax",
            callbacks: {
                parseAjax: function(mfpResponse) {
                    $.getScript("assets/js/custom-portfolio.js?v=20161014");
                }
            }
        }).magnificPopup("open");

        history.pushState('', document.title, window.location.pathname);
    }

})(jQuery);