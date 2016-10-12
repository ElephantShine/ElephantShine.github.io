
var portfolioMounted = function(){
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
}

var openSocial = function(event){
    if(event.name === "fb"){
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + utility.encodeUrl + '&amp;t=' + utility.encodeUrl);
    }else if(event.name === "tr"){
        window.open( 'https://twitter.com/intent/tweet?text=' + utility.encodeTitle + ':%20' + utility.encodeUrl);
    }else if(event.name === "g+"){
        window.open( 'https://plus.google.com/share?url=' + utility.encodeUrl);
    }
}

var utility = {
    encodeUrl : encodeURIComponent(document.URL),
    encodeTitle : encodeURIComponent(document.title)
}

Vue.component("c-preloader",
{
    template : 
    '<div id="preloader" v-once>\
        <div id="status">\
            <div class="status-mes"></div>\
        </div>\
    </div>'
});

Vue.component("c-home", 
{
    template : '\
    <section id="home" class="module-image banner-height-full" v-once>\
        <div class="mouse-icon">\
            <div class="wheel"></div>\
        </div>\
    </section>',
    mounted : function (){
        $(".banner-height-full").height($(window).height());

        $(window).resize(function() {
            $(".banner-height-full").height($(window).height());
        });

        $('#home').backstretch(homeImgs, { duration: 3000, fade: 750 });
    }
});

Vue.component("c-nav",
{
    template : 
    '<li>\
        <a :href="hrefText" @click.prevent="anchorClick">{{text}}</a>\
    </li>',
    props:[ "href", "text" ],
    computed:{
        hrefText : function(){
            return "#" + this.href;
        }
    },
    methods: {
        anchorClick : function(event){
            var anchor = $(event.target);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
        }
    }
});

Vue.component("c-header",
{
    template : 
    '<header class="header" v-once>\
        <nav class="navbar navbar-custom" role="navigation">\
            <div class="container">\
                <div class="navbar-header">\
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">\
                        <span class="sr-only">Toggle navigation</span>\
                        <span class="icon-bar"></span>\
                        <span class="icon-bar"></span>\
                        <span class="icon-bar"></span>\
                    </button>\
                    <a class="navbar-brand" href="index.html">象晴設計</a>\
                </div>\
                <div class="collapse navbar-collapse" id="custom-collapse">\
                    <ul class="nav navbar-nav navbar-right">\
                        <li is="c-nav"\
                            v-for="nav in navs"\
                            :href="nav.href"\
                            :text="nav.text"></li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
    </header>',
    data : function(){
        return {
            navs : navs
        };
    },
    mounted : function(){
         $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        });
    }
})

Vue.component("c-about",
{
    template : 
    '<section id="about" class="module" v-once>\
        <div class="row position-relative margin-0">\
            <div class="col-xs-12 col-md-6 side-image"></div>\
            <div class="col-xs-12 col-md-6 col-md-offset-6 side-image-text">\
                <div class="row">\
                    <div class="col-sm-12">\
                        <div class="module-header module-header-left wow fadeInUp">\
                            <h2 class="module-title">{{title}}</h2>\
                            <div class="module-subtitle" v-html="content">\
                            </div>\
                            <div class="module-line"></div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </section>',
    data : function(){
        return about;
    }
});

Vue.component("c-service-item",
{
    template : 
    '<div class="col-sm-3" v-once>\
        <div class="iconbox wow bounceIn">\
            <div class="iconbox-icon">\
                <span :class="service.icon"></span>\
            </div>\
            <div class="iconbox-text">\
                <h3 class="iconbox-title">{{service.title}}</h3>\
                <div class="iconbox-desc">{{service.content}}</div>\
            </div>\
        </div>\
    </div>',
    props:[ "service" ],
})

Vue.component("c-service",
{
    template :
    '<section id="services" class="module" v-once>\
        <div class="container">\
            <div class="row">\
                <div class="col-sm-6 col-sm-offset-3">\
                    <div class="module-header wow fadeInUp">\
                        <h2 class="module-title">{{title}}</h2>\
                        <div class="module-line"></div>\
                        <div class="module-subtitle" v-html="content"></div>\
                        <div class="module-line"></div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <div is="c-service-item"\
                 v-for="service in services"\
                 :service="service" ></div>\
        </div>\
    </section>',
    data : function(){
        return service;
    }
})

Vue.component("c-portfolio-item",
{
    template : 
    '<li class="portfolio-item" :data-groups="groups">\
        <figure>\
            <img :src="imgSrc" :alt="imgTitle">\
            <figcaption>\
                <a :href="href" class="ajax-popup"></a>\
                <div class="caption-inner">\
                    <h3 class="portfolio-item-title">{{serviceCht}}</h3>\
                    <div class="portfolio-item-desc">{{portfolio.desc}}</div>\
                </div>\
            </figcaption>\
        </figure>\
    </li>',
    props : [ "portfolio" ],
    computed:{
        groups : function(){           
            return "all " + this.portfolio.services.join(" ");;
        },
        imgTitle : function(){
            return this.portfolio.desc + " Portfolio";
        },
        imgSrc : function(){
            return "portfolio/images/{{name}}/portfolio-item.png".replace("{{name}}", this.portfolio.name);
        },
        href : function(){
            return "portfolio/{{name}}.html".replace("{{name}}", this.portfolio.name);
        },
        serviceCht: function(){

            var serviceCht = this.portfolio.services.map(function(service) {
                return serviceMapping[service];
            });

            return serviceCht.join("、");
        }
    }
})

Vue.component("c-portfolio-filter",
{
    template : 
    '<li :data-group="service">{{serviceCht}}</li>',
    props: [ "service" ],
    computed : {
        serviceCht : function(){
            return serviceMapping[this.service];
        }
    }
})

Vue.component("c-portfolio", 
{
    template : 
    '<section id="portfolio" class="module paddingb-none" v-once>\
        <div class="container">\
            <div class="row">\
                <div class="col-sm-6 col-sm-offset-3">\
                    <div class="module-header wow fadeInUp">\
                        <h2 class="module-title">{{title}}</h2>\
                        <div class="module-line"></div>\
                    </div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-sm-12">\
                    <ul id="filter">\
                        <li class="active" data-group="all">全部</li>\
                        <li is="c-portfolio-filter"\
                            v-for="service in servicesFilter"\
                            :service="service" ></li>\
                    </ul>\
                </div>\
            </div>\
        </div>\
        <ul class="portfolio-items-container">\
            <li is="c-portfolio-item"\
                v-for="portfolio in portfolios"\
                :portfolio="portfolio"></li>\
        </ul>\
    </section>',
    data : function(){
        return portfolio;
    },
    mounted : portfolioMounted
})

Vue.component("c-contact-form",
{
    template : 
    '<form id="contact-form" role="form" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLScuZAKH_x9TdlszJ3dk-sCitqTc4Mj2CCeBJmo9L9glOdQtMQ/formResponse" v-once>\
        <div class="ajax-hidden">\
            <div class="form-group wow fadeInUp">\
                <label class="sr-only" for="name">*姓名</label>\
                <input type="text" id="name" class="form-control" name="entry.1161612865" placeholder="*姓名" required="required">\
            </div>\
            <div class="form-group wow fadeInUp" data-wow-delay=".1s">\
                <label class="sr-only" for="company">公司名稱</label>\
                <input type="text" id="company" class="form-control" name="entry.705609605" placeholder="公司名稱">\
            </div>\
            <div class="form-group wow fadeInUp" data-wow-delay=".2s">\
                <label class="sr-only" for="email">*E-mail</label>\
                <input type="email" id="email" class="form-control" name="entry.173233556" placeholder="*E-mail" required="required">\
            </div>\
            <div class="form-group wow fadeInUp" data-wow-delay=".3s">\
                <label class="sr-only" for="phone">*連絡電話</label>\
                <input type="text" id="phone" class="form-control" name="entry.1953145441" placeholder="*連絡電話" required="required">\
            </div>\
            <div class="form-group wow fadeInUp" data-wow-delay=".4s">\
                <label class="sr-only" for="work">*需求項目</label>\
                <select name="entry.861706508" id="work" class="form-control" size="1" required="required">\
                    <option value="">*需求項目</option>\
                    <option v-for="service in services" v-bind:value="service">{{service}}</option>\
                </select>\
            </div>\
            <div class="form-group wow fadeInUp" data-wow-delay=".5s">\
                <textarea class="form-control" id="message" name="entry.1761916069" rows="7" placeholder="訊息"></textarea>\
            </div>\
            <button type="submit" class="btn btn-block btn-custom-2 wow fadeInUp" data-wow-delay=".3s">送出\
            </button>\
        </div>\
        <div class="ajax-response">\
            <i class="fa fa-warning"></i> * 為必填(選)欄位\
        </div>\
    </form>',
    data : function(){
        return {
            services : service.services.map(function(s){ return s.title; })
        }
    }
})

Vue.component("c-contact",
{
    template :
    '<section id="contact" class="module" v-once>\
        <div class="container">\
            <div class="row">\
                <div class="col-sm-6 col-sm-offset-3">\
                    <div class="module-header">\
                        <h2 class="module-title">{{title}}</h2>\
                        <div class="module-line"></div>\
                        <div class="module-subtitle" v-html="content"></div>\
                        <div class="module-line"></div>\
                    </div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-sm-6 col-sm-offset-3">\
                    <form is="c-contact-form"></form>\
                </div>\
            </div>\
        </div>\
    </section>',
    data : function(){
        return contact;
    }
})

Vue.component("c-footer-social",
{
    template : 
    '<li>\
        <a :href="social.href" :title="social.title" @click.prevent="openSocial"\
            class="wow fadeInUp" :data-wow-delay="social.delay">\
            <i :class="iconClass"></i>\
        </a>\
    </li>',
    props : [ "social" ],
    computed : {
        iconClass : function(){
            return "fa " + this.social.icon;
        }
    },
    methods : {
        openSocial : function(){
            this.$emit("openSocial");
        }
    }
})

Vue.component("c-footer",
{
    template : 
    ' <footer id="footer" v-once>\
        <div class="container">\
            <div class="row">\
                <div class="col-sm-12">\
                    <ul class="social-links">\
                        <li is="c-footer-social"\
                            v-for="social in socials"\
                            :social="social"\
                            @openSocial="openSocial(social)"></li>\
                    </ul>\
                    <p class="copyright">{{copyright}}\
                    </p>\
                </div>\
            </div>\
        </div>\
    </footer>',
    data : function(){
        return footer;
    },
    methods: {
        openSocial : openSocial
    }
})

Vue.component("c-scrollup", 
{
    template :
    '<div class="scroll-up">\
        <a id="scrollUp" href="#home" @click.prevent="scrollUp"><i class="fa fa-angle-double-up"></i></a>\
    </div>',
    methods : {
        scrollUp : function(){
            var anchor = $("#scrollUp");
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
        }
    }
})