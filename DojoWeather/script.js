console.log("Hello");


var removeDiv = document.querySelector('.cookie');

function removeNotice() {
    removeDiv.remove();
};


function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
};

function f2c(temp) {
    var cTemp = temp-32;
    console.log('cTemp ' + cTemp);
    return Math.round(5 / 9 * (temp - 32));
};


function convert(element) {
    for(var i=1; i<9; i++) {
    var tempSpan = document.querySelector("#temp" + i);
    var tempVal = parseInt(tempSpan.innerText);
    console.log('tempVal: ' + tempVal);
    if(element.value == "celcius") {
        tempSpan.innerText = f2c(tempVal);
    } else {
        tempSpan.innerText = c2f(tempVal);
    }
    console.log('innerText: ' + tempSpan.innerText)
    console.log('index: ' + i)
    console.log('element.value: ' + element.value)
}
};


