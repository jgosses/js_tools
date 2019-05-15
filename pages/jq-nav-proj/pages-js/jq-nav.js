//messing around with jquery, emphasis on finding elements at first
$('header').addClass('wow');
$('li:lt(5)').hide();//.fadeIn(3000);
$('li').on('click', function() {
    $(this).hide();
});

//toggle navlist on hamburger click
$('.menu-click').on('click', function() {
    $('li:lt(5)').toggle();
    //replace hamburger icon with x using z-index
    $('.menu-imgclose').toggle();
    $('.menu-img').toggle()
    $('.main-title').toggle();
});

