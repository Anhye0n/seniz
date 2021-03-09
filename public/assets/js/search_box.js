$(function () {
    $('#Search_').click(function() {
        $('.search_box_del').css('display','none');
        $('.dle').css('display', 'contents');

    })

    $('#search_close').click(function () {
        $('.search_box_del').css('display', 'contents');
        $('.dle').css('display', 'none');
    })
})