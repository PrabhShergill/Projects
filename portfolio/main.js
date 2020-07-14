$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          2000
        )
    });

    $("#up").click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
        once: true
    });
});