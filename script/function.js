$(document).ready(function() {
    $(".btn").click(function() {
        $(".form-control").css('height', '120px');
        $("#md5").css("height", "250px");
        $(".btn").hide();
        $(".seach").show();
    });

    $(".di2").click(function() {
        var a = $(".di2").css("background-color");
        alert(a);
        if ("rgb(255, 250, 205)" == a || a == undefined) {
            $(".di2").css(a, "rgb(255, 255, 0)");
            $(".contern2").show();
        } else {
            $(".di1").css(a, "rgb(255, 250, 205)");
            $(".contern").hide();
        }
    });


    //运单号文本框聚焦 增加高度
    $('#dida').focusin(inputFocusin);
    $('#dida').focusout(inputFocusout);

    //失去焦点
    function inputFocusout() {
        $(".seach").hide();
        $("#dida").animate({
            height: '42'
        }, 400);
        $('#md5').animate({
            height: '126'
        }, 400, function() {
            $('#dida').focusin(inputFocusin);
        });
    }

    //聚积焦点
    function inputFocusin() {
        $(".seach").show();
        $("#dida").unbind();
        $("#dida").animate({
            height: '100'
        }, 400);
        $('#md5').animate({
            height: '185'
        }, 400, function() {
            $('#dida').focusout(inputFocusout);
        });
    }
});