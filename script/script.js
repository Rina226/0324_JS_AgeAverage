$(function () {
    $("button").click(function(){

    var age1 = parseInt($("input:first-child").val());
    var age2 = parseInt($("input:nth-child(3)").val());
    var age3 = parseInt($("input:nth-child(5)").val());
        //br도 요소기 때문에 포함됨. 잘 구분해야 함.

    var avg = (age1+age2+age3)/3;
    //average : 평균. 업계에선 줄여서 avg라고 함
    $("#res").text("평균 : "+avg.toFixed(2));
                            //to frxed : 소수점 n째 자리까지만 표기해라

    });
});
