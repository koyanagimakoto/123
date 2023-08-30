$(function(){
    
    $('.okashi ul li a').click(function(){

        let imgSrc = $(this).attr('href');//クリックしたaタグのhref属性値を取得

        console.log(imgSrc);
        $('#photo img').attr('src', imgSrc);//#photo要素内のimgタグのsrc属性を変数imgSrcに書き換える

        $('#bg').fadeIn();
        $('#photo').fadeIn();//fadeInはじわっと出てくるアニメーション

        $('#bg').click(function(){
        $('#bg').fadeOut();
        $('#photo').fadeOut();//fadeOutは非表示にする

        });

        return false;//本来の機能を停止させる
    });

});//実行予約
