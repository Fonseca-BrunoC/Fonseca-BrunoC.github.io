$(document).ready(function() {
    $('a[href="#Crescimento microbiano"].btn-up').fadeOut('slow');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) 
            $('a[href="#Sobre o projeto"].btn-up').fadeIn('slow');
        else 
            $('a[href="#Sobre o projeto"].btn-up').fadeOut('slow');
    });
});