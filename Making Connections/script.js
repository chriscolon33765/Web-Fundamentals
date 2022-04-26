console.log("page loaded...");


function hide() {
    var x = document.getElementById("test");
    x.remove();
};

function hide2() {
    var x = document.getElementById("test2");
    x.remove();
};

function textChange() {
    var x = document.getElementById("changeText");
   
    document.getElementById("changeText").innerText = "Sam Smith";
};


numReq = 2
var countReq = document.querySelector("#numReq")

function changeReq() {
    numReq--;
    countReq.innerText = numReq;
};

totalConnections = 500
var newCount = document.querySelector("#totalConnections")

function upConnections() {
    totalConnections++;
    newCount.innerText = totalConnections;
};