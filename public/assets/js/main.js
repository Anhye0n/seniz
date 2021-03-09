//맨 처음 공백 확인
function input_change() {

    var list_array = new Array();
    var input_word = document.getElementById('input_word').value;
    input_word = String(input_word);
    if (input_word.length == 0) {
        $("#confirm").html(' ');
        $('.content_word').css('background', 'none');
        $('.content_word').css('color', '#000');
        /*$("#modi").html(document.getElementById('next1').value);*/
    }
    if (!input_word || 0 === /^\s*$/.test(input_word)) {

    } else {
        if (input_word.substring(input_word.length - 1) == ',') {
            var word = input_word.split(',');

            for (var i = 0; i < word.length - 1; i++) {
                list_array.push(word[i].replace(/(^\s*)|(\s*$)/g, "")); //앞뒤 공백 제거
                // document.getElementById("confirm").innerHTML = list_array;
            }
            var istag = '';
            for (var j = 0; j < list_array.length; j++) {
                var istag = istag + '<span class="word_box">' + list_array[j] + '</span> ';
            }
            $("#confirm").html(istag);
            /*var aed = document.getElementById('next1').value;*/
            var aed = $('#modi').text();
            aed = String(aed);
                for (var k = 0; k < list_array.length; k++) {
                    aed = aed.replace(list_array[k], "<span class=\"content_word\">" + list_array[k] + "</span>");
                }
                $("#modi").html(aed);
        }

    }
}

$(document).ready(function () {
    /*var asdf = new Array();
    var list_;
    var a = 0;
*/

    /*$('#modi').mouseup(function () {
        var txt = '';
        if (window.getSelection) {
            txt = window.getSelection();
        } else if (document.getSelection) {
            txt = document.getSelection();
        } else if (document.selection) {
            txt = document.selection.createRange().text;
        } else {
            return;
        }

        txt = String(txt); // Type Casting
        // txt = "" + txt; // 같음. 역시 자바스크립트

        asdf[a] = txt.trim();
        a++;

        for (var i = 0; i < a + 1; i++) {
            list_ = asdf.toString();
        }
        $('#confirm').html(list_);
        //드5그 확인
    });*/


    $('#next_2').click(function () {
        var list_array_2 = new Array();
        var list_array_before = $("#confirm").text();
        list_array_2 = list_array_before.split(' ');
        list_array_2.pop();

        var list_2 = [];
        list_2 = list_array_2.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);

        $('#confirm_2').text(list_2);
    })


    $('#next_2').click(function () {
        var list_2 = new Array();
        var f = 0;
        var list_array_2 = new Array();
        var test_word = document.getElementById("sentence").value;
        var input_word = document.getElementById('input_word').value;
        input_word = String(input_word);
        if (!input_word || 0 === /^\s*$/.test(input_word)) {

        } else {
            var word = input_word.split(',');

            for (var i = 0; i < word.length; i++) {
                if(word[i] != '') {
                    list_array_2.push(word[i].replace(/(^\s*)|(\s*$)/g, "")); //앞뒤 공백 제거
                }
                // document.getElementById("confirm").innerHTML = list_array;

            }
        }

        for(var i = 0; i < list_array_2.length; i++) {
            if(test_word.indexOf(list_array_2[i]) == -1) {
                if(f == 1) {
                } else {
                    alert('문장에 없는 단어가 있습니다');
                }
                f = 1;
            } else {
                list_2.push(list_array_2[i]);
            }
        }

        $('#confirm_3').text(list_2);
    });

    $('#save').click(function () {
        var list_array_2 = new Array();
        var list_array_before = $("#confirm").text();
        list_array_2 = list_array_before.split(' ');
        list_array_2.pop();

        var list_2 = [];
        list_2 = list_array_2.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
        $("#save").keyup(function (e) {
            if (e.keyCode == 13) enter_value();
        });

        function enter_value() {
            var check = confirm("저장하시겠습니까?");
            if (check == true) {
                alert("꺄 저장 되따!");
            } else if (check == false) {
                alert("왜 아니요 누름? ㅡㅡ");
            }
        }


    });


});
/*var list_2 = asdf.filter( (item, idx, array) => {
    return array.indexOf( item ) === idx ;
    //중복 제거
});*/

/*var list_2 = [];
list_2 = asdf.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
}, []);

$('#confirm_2').val(list_2)
});

$('#next_3').click(function () {
/!*var list_2 = asdf.filter( (item, idx, array) => {
    return array.indexOf( item ) === idx ;
    //중복 제거
});*!/
var list_3 = $('#confirm_2').val();
var split_array = list_3.split(',');

var list_4 = [];

list_4 = split_array.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
}, []);

$('#confirm_3').text(list_4)
});

$('#next_4').click(function () {
$('#confirm_4').text($('#confirm_3').html());
});

*/

function save() {
    var title = $('#title').val();
    var sub_title = $('#sub_title').val();
    var sentence = $('#sentence').val();
    var last_text = $('#confirm_3').text();
    console.log(title);
    console.log(last_text);
    var last_save = [];

    last_save = last_text.split(',');
    if (confirm("저장하시겠습니까?")) {
        $.ajax({
            url: "/problem_register",
            type: "POST",
            dataType: "json",
            data: JSON.stringify({
                title: title,
                sub_title: sub_title,
                sentence: sentence,
                words: last_save
            }),
            contentType: "application/json",
            cache: false,
            success: function(data  ) {
            }
        });
        alert('저장되었습니다.');
        location.href='/problem_list';
    } else {

    }
}
/*
    $('#reset_button_1').click(function () {
        if (confirm('단어를 초기화 하시겠습니까?')) {
            asdf.length = 0;
            list_ = null;
            list_2 = null;
            list_3 = null;
            $('#confirm_2').val(list_);
            $('#confirm_3').html(list_);
            $('#confirm').html(list_);
        } else {
            // Do nothing!
        }
    })
})*/
/*
$(document).ready(function () {
    var a = 0;
    var array_before_text = new Array();
    var array_text = new Array();
    var list_;
    ;
    $('#check_2').click(function () {
        a++;
        for (var i = 0; i < a + 1; i++) {
            array_before_text[a] = $('#input_word').val();
            array_text[a] = array_before_text[a];
            list_ = array_text.toString();
        }
        list_ = list_.replace(/ /gi, "");
        $('#confirm').html(list_);
    })*/


/*

/5
$(function () {
    var width;
    var height;

    width = $('show').width();4height = $('show').height();

    $('.Search').click(function () {
        $("")
        $("a#Search").replaceWith( "<form class=\"form-inline mr-auto\" target=\"_self\">\n" +
            "                    <div class=\"form-group\"><label for=\"search-field\"><i class=\"fa fa-search\"></i></label><input class=\"form-control search-field\" type=\"search\" name=\"search\" id=\"search-field\" autocomplete=\"off\"></div>\n" +
            "                </form>" );
    });
});
*!/
*!/
*/
