
var homeImgs = [
    'assets/images/home01.png',
    'assets/images/home02.png',
    'assets/images/home03.png'
];

var navs = [
    { href : "home", text : "Home" },
    { href : "about", text : "About" },
    { href : "services", text : "Service" },
    // { href : "portfolio", text : "Work" },
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

var portfolio = {
    title : "Work 作品集",
    portfolios : [
        {
            service : "logo", 
            name : "Flower-Fruit-Downshifting",
            desc : "花果慢活 Flower·Fruit·Downshifting"
        },
        {
            service : "logo", 
            name : "Interior-Flower-Life",
            desc : "青晨花實 Interior·Flower·Life"
        }
    ],
    servicesFilter : [ "book", "logo" ],
    clickPortfolioName : "123"
};

var contact = {
    title : "Contact 歡迎來作客",
    content : "大象，擁有超強的記憶力。歡迎您留下資本資料，讓我們記住您，並與你聯繫！<br>象晴設計‧誠摯款待！"
}

var footer = {
    copyright : "© 2016 象晴設計 ElephantShine, All Rights Reserved.",
    socials : [
        { name: "fb", href : "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.elephantshine.com", title : "Share on Facebook", delay : "", icon : "fa-facebook" },
        { name: "tr", href : "https://twitter.com/intent/tweet?source=http%3A%2F%2Fwww.elephantshine.com&amp;text=:%20http%3A%2F%2Fwww.elephantshine.com", title : "Share on Tweet", delay : ".1s", icon : "fa-twitter" },
        { name: "g+", href : "https://plus.google.com/share?url=http%3A%2F%2Fwww.elephantshine.com", title : "Share on Google+", delay : ".2s", icon : "fa-google-plus" },
    ]
}

var serviceMapping = {
    book : "書籍編排",
    logo : "LOGO設計"
}

var portfolios = {
    "Flower-Fruit-Downshifting" : {
        service : "LOGO設計",
        title : "花果慢活 Flower·Fruit·Downshifting",
        desc : '<p>是位單純、有想法女孩兒，希望結合無毒蔬果和花藝，提醒人們放慢腳步，提升生活的品質。</p>\
        <p>在聊天的過程中，挺有趣的，時而討論視覺風格，時而為彼此的生活理念加油打氣。</p>\
        <p>花果慢活的蔬果可都是經過合格檢驗的呦，目前有番茄.小黃瓜.玉米.哈密瓜......，好吃又健康!</p>\
        <p>啊，對了，提醒大家，需要的話要先預約喔，不然可是買不到der~ <a href="https://www.facebook.com/%E8%8A%B1%E6%9E%9C%E6%85%A2%E6%B4%BB-Flower-Fruit-Downshifting-946658895383638/" target="_blank">(花果慢活 Flower · Fruit · Downshifting)</a></p>',
        imgs : [ "01.jpg", "02.jpg", "03.jpg", "04.jpg" ],
        imgFolder : "Flower-Fruit-Downshifting"
    },
    "Interior-Flower-Life" : {
        service : "LOGO設計",
        title : "青晨花實 Interior·Flower·Life",
        desc : '<p>喜歡"青晨"這詞的室內設計師 和喜歡"花實"這兩字的花藝設計師一起創立的"青晨花實工作室"要互相結合，且有氣質.不花俏是兩位女孩兒的要求</p>\
        <p>實在很有趣邊討論、邊開懷大笑、邊吃漢堡寶腦中想法就這樣浮現出來了LOGO、名片之後，還製作了許多文宣品，過程一樣歡樂有趣，這應該就是所謂的 臭味相投 吧！ ^^。</p>\
        <p>有室內設計需求，及對花藝有興趣的人也歡迎找這兩位大師好朋友呦！ <a href="https://www.facebook.com/pages/%E9%9D%92%E6%99%A8%E8%8A%B1%E5%AF%A6-Interiorflowerlife-%E5%AE%A4%E5%85%A7%E7%A9%BA%E9%96%93%E8%A6%8F%E5%8A%83%E4%B8%8D%E5%87%8B%E8%8A%B1%E4%B9%BE%E7%87%A5%E8%8A%B1%E8%97%9D/468437866695960" target="_blank">(青晨花實 Interior·Flower·Life)</a></p>',
        imgs : [ "01.jpg", "02.jpg", "03.jpg" ],
        imgFolder : "Interior-Flower-Life"
    }
};