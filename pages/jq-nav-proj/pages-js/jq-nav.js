//messing around with jquery, emphasis on finding elements at first
$('header').addClass('wow');
$('li:lt(4)').hide().fadeIn(1500);
$('li').on('click', function() {
    $(this).remove();
});
