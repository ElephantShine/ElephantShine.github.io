
var navs = [
    { href : "home", text : "Home" },
    { href : "about", text : "About" },
    { href : "services", text : "Service" },
    { href : "portfolio", text : "Work" },
    { href : "contact", text : "Contact" }
];

var about = {
    title : "About 關於我",
    content : "歡迎光臨 象晴設計！ <br> 在這兒，晴天非外在，而是心情！ <br> 讓咱們一同帶著愉快的心，完成每件最重要的專案！"
};

var service = {
    title : "Service 我們的服務",
    services : [
        { title : "LOGO.名片設計", icon : "icon-users" },
        { title : "形象設計", icon : "icon-emoticon-smile" },
        { title : "產品型錄", icon : "icon-book-open" },
        { title : "書籍編排", icon : "icon-notebook" },
        { title : "活動文宣", icon : "icon-docs" },
        { title : "婚卡.喜帖設計", icon : "icon-calendar" },
        { title : "印刷", icon : "icon-doc" },
        { title : "其它設計", icon : "icon-bubble" }
    ]
};

var portfolio = {
    title : "Work 作品集",
    portfolios : [
        { 
            service : "book", 
            name : "NSO-DerRingdesNibelungen",
            desc : "NSO歌劇神話~尼貝龍指環"
        },
        {
            service : "logo", 
            name : "Flower-Fruit-Downshifting",
            desc : "花果慢活 Flower·Fruit·Downshifting"
        },
        {
            service : "logo", 
            name : "Interior-Flower-Life",
            desc : "青晨花實 Interior·Flower·Life"
        },
        {
            service : "logo", 
            name : "Jojos-Bridal-Atelier",
            desc : "JOJO's BRIDAL ATELIER 法式手工婚紗"
        },
        {
            service : "book", 
            name : "Taiwan-Ocean",
            desc : "文建會~水下文化資產叢書"
        }
    ]
};

var contact = {
    title : "Contact 聯絡我們",
    content : "晴天，非外在，而是心情！ <br> 告訴象晴您的需求，讓我們一同帶著愉快的心，完成每件最重要的專案！"
}

var footer = {
    copyright : "© 2016 象晴設計 ElephantShine, All Rights Reserved.",
    socials : [
        { name: "fb", href : "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Felephantshine.cf", title : "Share on Facebook", delay : "", icon : "fa-facebook" },
        { name: "tr", href : "https://twitter.com/intent/tweet?source=http%3A%2F%2Felephantshine.cf&amp;text=:%20http%3A%2F%2Felephantshine.cf", title : "Share on Tweet", delay : ".1s", icon : "fa-twitter" },
        { name: "g+", href : "https://plus.google.com/share?url=http%3A%2F%2Felephantshine.cf", title : "Share on Google+", delay : ".2s", icon : "fa-google-plus" },
    ]
}

var serviceMapping = {
    book : "書籍編排",
    logo : "LOGO.名片設計"
}

var portfolioMounted = function(){
    var $projectsContainer = $('.portfolio-items-container'),
		$imgs = $projectsContainer.find('img'),
		imgLoad;

    imgLoad = new imagesLoaded($imgs.get());
    imgLoad.on('always', function(){
        
        // Adds visibility: visible;
        $projectsContainer.addClass('images-loaded');

        // Initialize shuffle
        $projectsContainer.shuffle({
            itemSelector: '.portfolio-item',
            delimeter: ' '
        });
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
    '<div id="preloader">\
        <div id="status">\
            <div class="status-mes"></div>\
        </div>\
    </div>'
});

Vue.component("c-home", 
{
    template : '\
    <section id="home" class="module-image js-height-full">\
        <div class="mouse-icon">\
            <div class="wheel"></div>\
        </div>\
    </section>'
});

Vue.component("c-nav",
{
    template : 
    '<li>\
        <a :href="hrefText">{{text}}</a>\
    </li>',
    props:[ "href", "text" ],
    computed:{
        hrefText : function(){
            return "#" + this.href;
        }
    }
});

Vue.component("c-header",
{
    template : 
    '<header class="header">\
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
    }
})

Vue.component("c-about",
{
    template : 
    '<section id="about" class="module">\
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
    '<div class="col-sm-3">\
        <div class="iconbox wow bounceIn">\
            <div class="iconbox-icon">\
                <span :class="icon"></span>\
            </div>\
            <div class="iconbox-text">\
                <h3 class="iconbox-title">{{title}}</h3>\
            </div>\
        </div>\
    </div>',
    props:[ "title", "icon" ],
})

Vue.component("c-service",
{
    template :
    '<section id="services" class="module">\
        <div class="container">\
            <div class="row">\
                <div class="col-sm-6 col-sm-offset-3">\
                    <div class="module-header wow fadeInUp">\
                        <h2 class="module-title">{{title}}</h2>\
                        <div class="module-line"></div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <div is="c-service-item"\
                 v-for="service in services"\
                 :title="service.title"\
                 :icon="service.icon"></div>\
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
                <a :href="href" class="simple-ajax-popup"></a>\
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
            return "all " + this.portfolio.service;
        },
        imgTitle : function(){
            return this.portfolio.desc + " Portfolio";
        },
        imgSrc : function(){
            return "portfolio/images/{{name}}/portfolio-item.jpg".replace("{{name}}", this.portfolio.name);
        },
        href : function(){
            return "portfolio/{{name}}.html".replace("{{name}}", this.portfolio.name);
        },
        serviceCht: function(){
            return serviceMapping[this.portfolio.service]
        }
    }
})

Vue.component("c-portfolio", 
{
    template : 
    '<section id="portfolio" class="module paddingb-none">\
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
                        <li data-group="logo">LOGO.名片設計</li>\
                        <li data-group="book">書籍編排</li>\
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
    '<form id="contact-form" role="form" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLScuZAKH_x9TdlszJ3dk-sCitqTc4Mj2CCeBJmo9L9glOdQtMQ/formResponse">\
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
    '<section id="contact" class="module">\
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
    ' <footer id="footer">\
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
        <a href="#home"><i class="fa fa-angle-double-up"></i></a>\
    </div>'
})