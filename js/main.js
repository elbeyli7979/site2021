$(document).ready(function () {
    //Responsive Menü kodları
    $(".menu-toggle").click(function(){
        $(".linkler").toggleClass("ac-kapa");
        $(".linkler").toggleClass("animated slideInLeft");
    });
    $(window).scroll(function(){
        var x=$(window).scrollTop();
        if(x>100)
        {
            $("#kontrol").addClass("navi-arka animated bounceInDown");
        }
        else
        {
            $("#kontrol").removeClass("navi-arka animated bounceInDown");
        }
    });
    ///////////////////////////////////////////////////////////////////////////

    //Yukarı Çık Butonu Kodları
    $(window).scroll(function(){
        var mesafe=$(window).scrollTop();
        console.log(mesafe);
        if(mesafe>100)
        {
            $(".yukari_cik").fadeIn();
        }
        else
        {
            $(".yukari_cik").fadeOut();
        }
    });
    $(".yukari_cik").click(function(){
        $('html').animate({
            scrollTop:0
        },500);
    });
    /////////////////////////////////////////////////////////////////////////////
});