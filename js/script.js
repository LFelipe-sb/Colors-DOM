window.addEventListener('load',start);

function start(){
    setValueAtField();
    render();
}

function setValueAtField(){
    let rangeR = document.querySelector('#rangeR');
    let rangeG = document.querySelector('#rangeG');
    let rangeB = document.querySelector('#rangeB');
    let txtR = document.querySelector('#txtR');
    let txtG = document.querySelector('#txtG');
    let txtB = document.querySelector('#txtB');

    txtR.value = rangeR.value;
    txtG.value = rangeG.value;
    txtB.value = rangeB.value;
    newColorDiv(rangeR.value, rangeG.value, rangeB.value);
}

function newColorDiv(setRed, setGreen, setBlue){
    let divColor = document.querySelector('#divColor');
    let hexaColor = document.querySelector('#hexaColor');   
    let color = `rgb(${setRed},${setGreen},${setBlue})`;

    divColor.style.background = color;
    hexaColor.textContent = "#" + hexa(parseInt(setRed)) 
    + hexa(parseInt(setGreen)) + hexa(parseInt(setBlue));
    if(setRed < 100 || setGreen < 100 || setBlue < 100){
        hexaColor.style.color = 'white';
    } else {
        hexaColor.style.color = 'black';
    }

    function hexa(value){
        var number = value.toString(16);
        if(value < 16){
            number = "0" + number;
        }
        return number;
    }
    render();
}

function render(){
    rangeR.addEventListener('input', setValueAtField);
    rangeG.addEventListener('input', setValueAtField);
    rangeB.addEventListener('input', setValueAtField);
}