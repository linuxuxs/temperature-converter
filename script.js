const texts = document.getElementById("input");
const celsius = document.getElementById("check");
const fahrenhein = document.getElementById("check_two");
const btn = document.getElementById("BTN");
const result = document.getElementById("result");
let res;


function convo(){

    if(celsius.checked)
    {
        res = Number(texts.value);
        res = res * 9 / 5 + 32;
        result.textContent = res.toFixed(1) + "°F";
    }
    else if (fahrenhein.checked)
    {
        res = Number(texts.value);
        res = (res - 32) * (5/9);
        result.textContent = res.toFixed(1) + "°C";
    }
    else
    {
        result.textContent = "Please select a unit!";
    }
    


}   