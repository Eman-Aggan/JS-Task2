
function calculate(operation){
let x = Number(document.getElementById("num1").value);
let y = Number(document.getElementById("num2").value);
 const resDiv = document.getElementById('result')

let res;

    if (isNaN(x) || isNaN(y)) {

        resDiv.textContent = "please Enter  Valid  numbers.";

        resDiv.classList.add("error");

        return;

    }



    switch(operation){
        case 'add':
            res = x +y;
            break;

        case 'sub':

           res = x - y;
            break;

        case 'div':
            if (y === 0) {

                resDiv.textContent = `can not divide by zero`;

                resDiv.classList.add("error");

                return;

            }
            else{  
                res = x / y;
                resDiv.classList.remove("error");
            break;
        }

          

        case 'multiple':

           res = x * y;
            break;
    }

    resDiv.textContent = `result : ${res}`



}
