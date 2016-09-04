$(document).ready(function () {
    $(":text").focus(function () {
        $(this).val("");
        $(this).css("color", "#fff");
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
        if (val == "") {
            $(this).val("学号必填");
            $(this).css("color", "red");
        } else if (!reg.test(val)) {
            $(this).val("学号格式错误");
            $(this).css("color", "red");
        }
    });
    $("#class").blur(function () {
        var val = $(this).val();
        if (val == "") {
            $(this).val("班级必填");
            $(this).css("color", "red");
        }
    });
    $("#tel").blur(function () {
        var val = $(this).val();
        var reg = /^1\d{10}$/;
        if (val == "") {
            $(this).val("联系电话必填");
            $(this).css("color", "red");
        } else if (!reg.test(val)) {
            $(this).val("电话格式错误");
            $(this).css("color", "red");
        }
    });
    $("#btn_submit").click(function () {
        var checked = true;
        for (var i = 0; i < 4; i++) {
            var col=$(":text").eq(i).css("color");
            var val=$(":text").eq(i).val();
            if (col == "rgb(255, 0, 0)") {
                checked = false;
                break;
            }else{
                if(val=="姓名"||val=="学号"||val=="班级"||val=="联系电话"){
                    checked=false;
                    break;
                }
            }
        }
        if (checked && $("#department option:selected").text() != "请选择希望加入的部门") {
            $("#input_content").css("display","none");
            $("#result_content").css("display","block");
        } else {
            alert("请完善表单内容后再提交！");
        }
    });
});