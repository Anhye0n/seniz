$(function () {
    //Next

    $('#next').click(function () {
        $('#title_page').css('display', 'none');
        $('#submit_1').css('display', 'contents');
        var text_ = $('.notes').val();

        if ($('.notes').val().replace(/\s/g, "").length == 0) {
            $('.save-text').text("값이 저장되지 않았습니다. :<");
        } else {
            text_ = text_.replace(/(?:\r\n|\r|\n)/g, '\n');
            $('.save-text').html(text_);
        }

        $('#1_step_text').css('text-align', 'left');
        $('#1_step_text').css('font-size', '30px');

        $('#1_step').removeClass('step_line_active');
        $('#1_step').addClass('step_line');

        $('#2_step_text').css('text-align', 'right');
        $('#2_step_text').css('font-size', '35px');

        $('#2_step').removeClass('step_line');
        $('#2_step').addClass('step_line_active');
    });

    $('#next_1').click(function () {
        $('#submit_1').css('display', 'none');
        $('#submit_2').css('display', 'contents');
        var text_ = $('.notes').val();

        if ($('.notes').val().replace(/\s/g, "").length == 0) {
            $('.save-text').text("값이 저장되지 않았습니다. :<");
        } else {
            text_ = text_.replace(/(?:\r\n|\r|\n)/g, '\n');
            $('.save-text').html(text_);
        }

        $('#2_step_text').css('text-align', 'left');
        $('#2_step_text').css('font-size', '30px');

        $('#2_step').removeClass('step_line_active');
        $('#2_step').addClass('step_line');

        $('#3_step_text').css('text-align', 'right');
        $('#3_step_text').css('font-size', '35px');

        $('#3_step').removeClass('step_line');
        $('#3_step').addClass('step_line_active');


    });

    $('#next_2').click(function () {
        $('#submit_2').css('display', 'none');
        $('#submit_3').css('display', 'contents');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);

        $('#3_step_text').css('text-align', 'left');
        $('#3_step_text').css('font-size', '30px');

        $('#3_step').removeClass('step_line_active');
        $('#3_step').addClass('step_line');

        $('#4_step_text').css('text-align', 'right');
        $('#4_step_text').css('font-size', '35px');

        $('#4_step').removeClass('step_line');
        $('#4_step').addClass('step_line_active');

    });
/*
    $('#next_3').click(function () {
        $('#submit_3').css('display', 'none');
        $('#submit_4').css('display', 'contents');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);
        $('#4_step_text').css('text-align', 'left');
        $('#4_step_text').css('font-size', '30px');

        $('#4_step').removeClass('step_line_active');
        $('#4_step').addClass('step_line');

        $('#5_step_text').css('text-align', 'right');
        $('#5_step_text').css('font-size', '35px');

        $('#5_step').removeClass('step_line');
        $('#5_step').addClass('step_line_active');
    });


    $('#next_4').click(function () {
        $('#submit_4').css('display', 'none');
        $('#submit_3').css('display', 'contents');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);
    });*/

    //Previous

    $('#previous_1').click(function () {
        $('#title_page').css('display', 'contents');
        $('#submit_1').css('display', 'none');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);

        $('#2_step_text').css('text-align', 'left');
        $('#2_step_text').css('font-size', '30px');

        $('#2_step').removeClass('step_line_active');
        $('#2_step').addClass('step_line');

        $('#1_step_text').css('text-align', 'right');
        $('#1_step_text').css('font-size', '35px');

        $('#1_step').removeClass('step_line');
        $('#1_step').addClass('step_line_active');
    });

    $('#previous_2').click(function () {
        $('#submit_1').css('display', 'contents');
        $('#submit_2').css('display', 'none');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);

        $('#3_step_text').css('text-align', 'left');
        $('#3_step_text').css('font-size', '30px');

        $('#3_step').removeClass('step_line_active');
        $('#3_step').addClass('step_line');

        $('#2_step_text').css('text-align', 'right');
        $('#2_step_text').css('font-size', '35px');

        $('#2_step').removeClass('step_line');
        $('#2_step').addClass('step_line_active');
    });

    $('#previous_3').click(function () {
        $('#submit_2').css('display', 'contents');
        $('#submit_3').css('display', 'none');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);

        $('#4_step_text').css('text-align', 'left');
        $('#4_step_text').css('font-size', '30px');

        $('#4_step').removeClass('step_line_active');
        $('#4_step').addClass('step_line');

        $('#3_step_text').css('text-align', 'right');
        $('#3_step_text').css('font-size', '35px');

        $('#3_step').removeClass('step_line');
        $('#3_step').addClass('step_line_active');

    });
/*
    $('#previous_4').click(function () {
        $('#submit_3').css('display', 'contents');
        $('#submit_4').css('display', 'none');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);

        $('#5_step_text').css('text-align', 'left');
        $('#5_step_text').css('font-size', '30px');

        $('#5_step').removeClass('step_line_active');
        $('#5_step').addClass('step_line');

        $('#4_step_text').css('text-align', 'right');
        $('#4_step_text').css('font-size', '35px');

        $('#4_step').removeClass('step_line');
        $('#4_step').addClass('step_line_active');
    });*/

    /*$('#previous_5').click(function () {
        $('#submit_4').css('display', 'contents');
        $('#submit_3').css('display', 'none');
        var text_ = $('.notes').val();

        $('.save-text').html(text_);

    });*/
});