
var homeImgs = [
    'assets/images/home01.png',
    'assets/images/home02.png',
    'assets/images/home03.png'
];

var navs = [
    { href : "home", text : "Home" },
    { href : "about", text : "About" },
    { href : "services", text : "Service" },
    { href : "portfolio", text : "Work" },
    { href : "contact", text : "Contact" }
];

var about = {
    title : "About 象晴設計",
    content : "象，有驚人的記憶力；<br>\
晴，是每一天的生活！<br>\
<br>\
歡迎光臨 象晴設計！ <br>\
在這兒，晴天非外在，而是心情；<br>\
讓咱們一同帶著愉快的心，完成每件最重要的專案！<br>\
<br>\
NICE to MEET YOU！<br>"
};

var service = {
    title : "Service 服務好周到",
    content : "象晴設計不斷的進化演進，提供完整的專業服務，效率滿載<br>為每一專案形塑極大化的價值。",
    services : [
        { title : "LOGO設計", icon : "icon-badge", content : "品牌命名‧視覺設計" },
        { title : "形象設計", icon : "icon-emoticon-smile", content : "識別延伸‧廣宣品設計" },
        { title : "包裝設計", icon : "icon-present", content : "產品包裝‧禮盒設計" },
        { title : "活動文宣", icon : "icon-camera", content : "海報設計‧活動旗幟" },
        { title : "產品型錄", icon : "icon-book-open", content : "產品攝影‧型錄編排" },
        { title : "書籍編排", icon : "icon-notebook", content : "封面設計‧內頁編排" },
        { title : "婚卡喜帖", icon : "icon-heart", content : "客製化婚卡及喜帖" },
        { title : "印刷輸出", icon : "icon-flag", content : "紙類印刷‧大圖輸出" }
    ]
};

var contact = {
    title : "Contact 歡迎來作客",
    content : "大象，擁有超強的記憶力。歡迎您留下資本資料，讓我們記住您，並與你聯繫！<br>象晴設計‧誠摯款待！"
}

var footer = {
    copyright : "© 2016 象晴設計 ElephantShine, All Rights Reserved.",
    socials : [
        { name: "fb", href : "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.elephantshine.com", title : "Share on Facebook", delay : "", icon : "fa-facebook" },
        { name: "tr", href : "https://twitter.com/intent/tweet?source=https%3A%2F%2Fwww.elephantshine.com&amp;text=:%20https%3A%2F%2Fwww.elephantshine.com", title : "Share on Tweet", delay : ".1s", icon : "fa-twitter" },
        { name: "g+", href : "https://plus.google.com/share?url=https%3A%2F%2Fwww.elephantshine.com", title : "Share on Google+", delay : ".2s", icon : "fa-google-plus" },
    ]
}

var serviceMapping = {
    logo : "LOGO設計",
    image : "形象設計",
    packing : "包裝設計",
    activity : "活動文宣",
    product : "產品型錄",
    book : "書籍編排",
    wedding : "婚卡喜帖",
    print : "印刷輸出"
}

var portfolio = {
    title : "Work 日常的綻放",
    content : "過去的經驗加上一直存在的熱情，滿足客戶的需求，我們的未來是越來越迷人的風景！",
    servicesFilter : [ "logo", "image", "packing", "activity", "product", "book", "wedding", "print" ],
    portfolios : [
        {
            services : [ "logo", "print" ], 
            name : "Flower-Fruit-Downshifting",
            title : "花果慢活",
            content : "Flower·Fruit·Downshifting"
        },
        {
            services : [ "logo", "print" ], 
            name : "Interior-Flower-Life",
            title : "青晨花實",
            content : "Interior·Flower·Life"
        },
        {
            services : [ "book" ], 
            name : "Ocean-Taiwan",
            title : "水下文化資產叢書",
            content : "OCEAN TAIWAN"
        },
        {
            services : [ "book" ], 
            name : "Taishin-Arts",
            title : "台新藝術獎 藝評集 - 新藝見 音樂舞蹈篇",
            content : "Taishin Arts Review - Music & Dance"
        },
        {
            services : [ "print" ], 
            name : "Food-Fun",
            title : "福芳號",
            content : "FOOD FUN"
        }
    ]
};