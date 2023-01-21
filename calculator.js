
const shanta = document.querySelector("#text");

// var num1;
// var num2;
// var ans = 0.0;
// var key;

function aM(){
    // shanta.innerHTML += "M";
    shanta.innerHTML = shanta.innerHTML.slice(0, -1);
}

function aMadd(){
    shanta.innerHTML = "";
}

function a1(){
    shanta.innerHTML += 1;
}

function a2(){
    shanta.innerHTML += 2;
}

function a3(){
    shanta.innerHTML += 3;
}

function a4(){
    shanta.innerHTML += 4;
}

function a5(){
    shanta.innerHTML += 5;
}

function a6(){
    shanta.innerHTML += 6;
}

function a7(){
    shanta.innerHTML += 7;
}

function a8(){
    shanta.innerHTML += 8;
}

function a9(){
    shanta.innerHTML += 9;
}

function a0(){
    shanta.innerHTML += 0;
}

function dot(){
    shanta.innerHTML += ".";
}

num1 = 0;
function add(){
    // key = "+"
    // num1 = 0;
    // num1 += parseFloat(shanta.value);
    // console.log(num1);
    shanta.innerHTML += "+";
    // setTimeout(() => {
    //     shanta.innerHTML = "";
    // }, 700);
    // console.log(shanta.value);
}

function sub(){
    shanta.innerHTML += "-";
    // key = "-"
    // num1 -= parseFloat(shanta.value);
    // console.log(num1);
    // shanta.innerHTML += "-";
    // setTimeout(() => {
    //     shanta.innerHTML = "";
    // }, 700);
}

// num1 = 1;
function mul(){
    shanta.innerHTML += "*";
    // key = "x"
    // // num1 = 1;
    // num1 *= parseFloat(shanta.value);
    // console.log(num1);
    // shanta.innerHTML += "x";
    // setTimeout(() => {
    //     shanta.innerHTML = "";
    // }, 700);
}

function div(){
    shanta.innerHTML += "/";
    // key = "/"
    // num1 /= parseFloat(shanta.value);
    // console.log(num1);
    // shanta.innerHTML += "/";
    // setTimeout(() => {
    //     shanta.innerHTML = "";
    // }, 700);
}

function mod(){
    shanta.innerHTML += "%";
    // key = "%"
    // num1 = parseFloat(shanta.value);
    // console.log(num1);
    // shanta.innerHTML += "%";
    // setTimeout(() => {
    //     shanta.innerHTML = "";
    // }, 700);
}

function equal(){
//     num2 = parseFloat(shanta.value);
//     shanta.innerHTML += "=";
//     switch (key) {
//         case "+":
//             ans = num1 + num2;
//             break;

//         case "-":
//             ans = num1 - num2;
//             break;

//         case "x":
//             ans = num1 * num2;
//             break;

//         case "/":
//             ans = num1 / num2;
//             break;

//         case "%":
//             ans = num1 % num2;
//             break;
    
//         default:
//             alert("You have enter a wrong operation sign");
//             break;
//     }
    
//     setTimeout(() => {
//         shanta.innerHTML = "";
//     }, 700);
//     setTimeout(() => {
//         shanta.innerHTML += ans;
//     }, 700);

    shanta.innerHTML = eval(shanta.innerHTML);
}

