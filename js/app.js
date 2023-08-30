$(function(){

    $('.slideshow').slick({
        autoplay: true,//自動再生
        arrows: false,//矢印ボタンの表示非表示
        fade: true,//切り替えるアニメーションをfadeにる
        speed: 1000,//切り替えアニメーションの時間（ミリ秒）
        autoplaySpeed: 1000,//写真の表示時間（ミリ秒）
        dots: false,//画像下に...（イージケーター）が表示非表示
    });

});