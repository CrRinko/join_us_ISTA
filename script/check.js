var focused=false;
$(document).ready(function () {
    $(":text").focus(function () {
        $(this).val("");
        $(this).css("color", "#fff");
        focused=true;
    });
    $("#name").blur(function () {
        var reg = /^\S{1,15}$/;
        var val = $(this).val();
        if (val == "") {
            $(this).val("姓名必填");
            $(this).css("color", "red");
        }
    });
    $("#id").blur(function () {
        var reg = /^20[0-1][0-6](\d{6})$/;
        var val = $(this).val();
        if(val==""){
            $(this).val("学号必填");
            $(this).css("color", "red");
        }
        else if (!reg.test(val)) {
            $(this).val("学号格式错误");
            $(this).css("color", "red");
        }
    });
    $("#class").blur(function(){
        var val=$(this).val();
        if(val==""){
            $(this).val("班级必填");
            $(this).css("color", "red");
        }
    });
    $("#tel").blur(function(){
        var val=$(this).val();
        var reg=/^1\d{10}$/;
        if(val==""){
            $(this).val("联系电话必填");
            $(this).css("color", "red");
        }else if(!reg.test(val)){
            $(this).val("电话格式错误");
            $(this).css("color", "red");
        }
    })
});