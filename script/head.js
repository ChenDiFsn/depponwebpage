$(document).ready(function() {

    $('.dropdown').removeAttr('onclick'); //去掉标签中的onclick事件
    $(".dropdown").mouseenter(function() {

        console.log('sd');
        $(this).children('ul').show();
    });
    $(".dropdown").mouseleave(function() {
        $(this).children('ul').hide();
    });



});