const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputElement = document.querySelector("#output");

function calculateArea(){
    const area = 0.5 * Number(sides[0].value) * Number(sides[1].value);
    outputElement.innerText = "The area of given triangle is " + area + " square units";
}

areaBtn.addEventListener("click", calculateArea);