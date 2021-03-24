/*alert(17+5);*/ // 첫번째 방법 : 경고창을 이용해 출력시 직접 계산식 넣기

//var number1=17;
//var number2=5;
//var result = number1 + number2;
/*alert("result(결과) : " + number1 + number2); */
// result(결과) : + 17 먼저 계산하고 + 5. 그래서 175

/*alert("result(결과) : " + (number1 + number2) );*/
//소괄호부터 먼저 처리. 그럼 22

/*alert("2" + 5 + 7); // "25"+7
alert(2 + 5 + "7"); // 7+"7" 컴퓨터는 한 번에 2개의 계산밖에 못 하기 때문*/
//document.getElementById("addRes").innerText = result;



        $(function() {

            $("button").click(function(){
               var number1 = $("#number1").val();
                var number2 = $("#number2").val();
                var result = parseInt(number1) % parseInt(number2);
                $("#addRes").text("result : " + result);
            });
            //선택자를 사용하여 대상을 지정하고 기능을 적용하세요.

        });
