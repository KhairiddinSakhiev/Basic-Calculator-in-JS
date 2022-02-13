var calculate = function(){
    var b = Number.parseFloat(txtBox.value);
    if(amal=="+")
    {
        txtBox.value = a+b;
    }
    else if(amal=="-")
    {
        txtBox.value=a-b;
    }
    else if(amal=="*")
    {
        txtBox.value=a*b;
    }
    else if(amal=="/")
    {
        txtBox.value=a/b;
    }
    a = 0;
}
var numBtns = document.getElementsByClassName("num");
var amlBtns = document.getElementsByClassName("aml");
var btnC = document.getElementById("btnC");
var btn1C = document.getElementById("btn1C");
var a = 0;
var amal = "";
var amalGirifShud = false;
var txtBox = document.getElementsByTagName("input")[0];


var fNum = function (evt) {
    var txt = evt.target.innerText;
    if (amalGirifShud) {
        amalGirifShud = false;
        txtBox.value = "0";
    }
    if (txtBox.value == "0" && txt != ".") {
        txtBox.value = txt;
    } else {
        if (txt == "." && txtBox.value == "") {
            txtBox.value = "0.";
        } else if (txt != "." || !txtBox.value.includes(".")) {
            txtBox.value += txt;
        }

    }

};

var fAml = function (evt) {
    var txt = evt.target.innerText;
    if (txt == "√") {
        txtBox.value = Math.sqrt(+txtBox.value);
    }
    else if(txt=="!")
    {
        var factar = 1;
        for(let i = 1; i<Number.parseFloat(txtBox.value);i++)
        {
            factar = factar*(i+1);
        }
        txtBox.value = factar;
    } else {
        if (a != 0) {
            calculate();
        }
        a = Number.parseFloat(txtBox.value);
        amalGirifShud = true;
    }
    amal = txt;
}


for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].onclick = fNum;
}
btnC.onclick = function () {
    txtBox.value = "0";
    a = 0;
}

btn1C.onclick = function () {
    txtBox.value = txtBox.value.substr(0, txtBox.value.length - 1);
    if (txtBox.value == "") {
        txtBox.value = "0";
    }
}
for (var b of amlBtns) {
    b.onclick = fAml;
}

function onBarobarClick() {
    calculate();
    amal = "";
    
}