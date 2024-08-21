let firstRow = [];
let secondRow = [];
let thirdRow = [];
let fourthRow = [];
let fifthRow = [];
let mainIncr = 3;
let mainClickRun = true;
let keyboardRun = false;
let totalKeys = [];
let keyPosition = 0;
let displayArr = [];
let textKeyboard;
let sendKeyboard;
let a;
let b;


function fetchdata(){
    fetch("keyboard.json")
    .then((response) => response.json())
    .then((data) => {
        copyData(data.keyboard);
    })
    .catch((err) => {
        console.log("error:", err);
    });
}




function copyData(data){
    data.firstkeys.forEach(element => {
        firstRow.push(element);
    });

    data.secondkeys.forEach(element =>{
        secondRow.push(element);
    });
    data.thirdkeys.forEach(element => {
        thirdRow.push(element);
    });

    data.fourthkeys.forEach(element =>{
        fourthRow.push(element);
    });
    data.fifthkeys.forEach(element => {
        fifthRow.push(element);
    });
    keyboardBuilder();
}

var Mainoutput = "";

function keyboardBuilder(){
    let keyrows = document.getElementsByClassName('keys');
    let first_row = keyrows[0];
    let second_row = keyrows[1];
    let third_row = keyrows[2];
    let fourth_row = keyrows[3];
    let fifth_row = keyrows[4];
    let output = "";

    firstRow.forEach(element => {
        
        output +=`
            <button class="char">${element}</button>
        `
    });
    first_row.innerHTML = output;

    output = "";

    secondRow.forEach(element => {
        output += `
            <button class="char">${element}</button>
        `
    });
    second_row.innerHTML = output;

    output = "";
    
    thirdRow.forEach(element => {
        output +=`
        <button class="char">${element}</button>
        `
    })
    third_row.innerHTML = output;

    output = "";

    fourthRow.forEach(element => {
        output += `
        <button class="char">${element}</button>
        `
    })
    fourth_row.innerHTML = output;

    output = "";

    fifthRow.forEach(element => {
        output += `
        <button class="char">${element}</button>
        `
    })
    fifth_row.innerHTML = output;
;}


fetchdata();

var clickCounter = 0;
var clickTImer = null;




document.querySelector('body').removeEventListener('click',clickFunction);
document.querySelector('body').addEventListener('click',clickFunction);
 function clickFunction(){

    textKeyboard = true;
    sendKeyboard = true;
    if(mainClickRun){
        keyboardRun = false;
        clickCounter++;
        if(clickTImer){
            clearTimeout(clickTImer);
        }
        clickTImer = setTimeout(() => {
            if(clickCounter === 1){
                movingMain();
            }
            else if(clickCounter === 2){
                selectingElement();
            }
            else{
                triple();
            }
            clickCounter = 0;
        }, 250);
    }
}



let textArea = document.getElementById('text_area');
let textAreaWidth = window.getComputedStyle(textArea).borderWidth;
let sendArea = document.getElementById('sendAddress');
let sendAreaWidth = window.getComputedStyle(sendArea).borderWidth;
let sendButton = document.getElementById('send_button_div');
let sendButtonWidth = window.getComputedStyle(sendButton).borderWidth;
let sendArea1 = document.getElementById('email');

function movingMain(){
    mainIncr++;

    if(mainIncr % 3 === 1){
        textArea.style.borderWidth = '3px';
        sendArea.style.borderWidth = '1px';
        sendButton.style.borderWidth = "1px";
        
    }
    else if(mainIncr % 3 === 2){
        textArea.style.borderWidth = '1px';
        sendArea.style.borderWidth = '3px';
        sendButton.style.borderWidth = "1px";
    }

    else if(mainIncr % 3 === 0){
        textArea.style.borderWidth = '1px';
        sendArea.style.borderWidth = '1px';
        sendButton.style.borderWidth = "3px";
    }
}


function selectingElement(){
    if(textArea.style.borderWidth === "3px"){
        textArea.readOnly = false;
        textArea.focus();
        textArea.style.height = "45vh";
        let keyboard = document.getElementById('keyboard');
        keyboard.style.display = "block";
        b = 0;
        keyboardRunner(textArea);
    }

    else if(sendArea.style.borderWidth ==="3px"){
        sendArea1.disabled = false;
        sendArea1.focus();
        textArea.style.height = "45vh";
        let keyboard = document.getElementById('keyboard');
        keyboard.style.display = "block";
        a = 0;
        keyboardRunner2(sendArea1);
    }
    
    else if(sendButton.style.borderWidth ==="3px"){
        location.reload();
    }
}


function triple(){
    console.log("multiplce click detected");
}

function keyboardRunner(area){
    if(a === 0){
        return;
    }
    totalKeys = [];
    keyPosition = 0;
    mainClickRun = false;
    keyboardRun = true;

    firstRow.forEach(element => {
        totalKeys.push(element);
    });
    secondRow.forEach(element => {
        totalKeys.push(element);
    });
    thirdRow.forEach(element => {
        totalKeys.push(element);
    });
    fourthRow.forEach(element => {
        totalKeys.push(element);
    });
    fifthRow.forEach(element => {
        totalKeys.push(element);
    });


    let clickCounterKeyboard = 0;
    let clickTImerKeyboard = null; 
    document.querySelector('body').addEventListener('click',keyboardClicker);
    
    function keyboardClicker(){
        if(keyboardRun){
            clickCounterKeyboard++;
            if(clickTImerKeyboard){
                clearTimeout(clickTImer);
            }
            clickTImerKeyboard = setTimeout(() => {
                if(clickCounterKeyboard === 1){
                    movingKeys();
                }
                else if(clickCounterKeyboard === 2){
                    selectingKey(area);
                }
                else if(clickCounterKeyboard >= 3){
                    rowDown();
                }
                clickCounterKeyboard = 0;
            }, 400);
        }
    }
}

function keyboardRunner2(area){
    if(b === 0){
        return;
    }
    totalKeys = [];
    keyPosition = 0;
    mainClickRun = false;
    keyboardRun = true;

    firstRow.forEach(element => {
        totalKeys.push(element);
    });
    secondRow.forEach(element => {
        totalKeys.push(element);
    });
    thirdRow.forEach(element => {
        totalKeys.push(element);
    });
    fourthRow.forEach(element => {
        totalKeys.push(element);
    });
    fifthRow.forEach(element => {
        totalKeys.push(element);
    });


    let clickCounterKeyboard = 0;
    let clickTImerKeyboard = null; 
    document.querySelector('body').addEventListener('click',keyboardClicker);
    
    function keyboardClicker(){
        if(keyboardRun){
            clickCounterKeyboard++;
            if(clickTImerKeyboard){
                clearTimeout(clickTImer);
            }
            clickTImerKeyboard = setTimeout(() => {
                if(clickCounterKeyboard === 1){
                    movingKeys();
                }
                else if(clickCounterKeyboard === 2){
                    selectingKey(area);
                }
                else if(clickCounterKeyboard >= 3){
                    rowDown();
                }
                clickCounterKeyboard = 0;
            }, 400);
        }
    }
}

function movingKeys(){
    let key = document.querySelectorAll('.char');
    key.forEach(element => {
        element.style.borderWidth = '0px';
    })
    if(keyPosition === 45){
        keyPosition = 0;
    }
    let currentKey = key[keyPosition];
    currentKey.style.borderWidth = '1px';
    keyPosition++;
    console.log(keyPosition)
    if(keyPosition === 45){
        keyPosition = 0;
    }
}



function selectingKey(area){
    let key = document.querySelectorAll('.char');
    key.forEach(element => {    
         if(element.style.borderWidth === '1px'){

            if(element.innerHTML === "⌫"){
                 displayArr.pop();
            }

            else if(element.innerHTML === "↵"){
                mainClickRun = true;
                let keyboard = document.getElementById('keyboard');
                keyboard.style.display = "none";
                textArea.style.height = "70vh";
                clickFunction();
            }

            else if(element.innerHTML === "⇪"){
                let valueArr = document.getElementsByClassName('char');
                let value = Array.from(valueArr);

                if(valueArr[0].style.textTransform === 'uppercase'){
                    value.forEach(element => {
                        element.style.textTransform = "lowercase";
                    })
                }

                else{
                    value.forEach(element => {
                        element.style.textTransform = "uppercase";
                    })
                }
            }

            else if(element.innerHTML === "space"){
                displayArr.push(" ");
            }

            else{
                displayArr.push(element.innerHTML);
            }
            textArea.innerHTML = "";
            displayArr.forEach(element => {
            textArea.innerHTML += element;
    
            });
            console.log(area);
         }
    });
}

function rowDown(){
    if(keyPosition <= 19){
        keyPosition += 9;
    }
    else if(keyPosition >= 20 && keyPosition <= 29){
        keyPosition += 8;
    }
    else if(keyPosition >= 30){
        keyPosition += 8;
    }
    let key = document.querySelectorAll('.char');
    key.forEach(element => {
        element.style.borderWidth = '0px';
    })
    if(keyPosition >= 44){
        keyPosition = 0;
    }
    let currentKey = key[keyPosition];
    currentKey.style.borderWidth = '1px';
    keyPosition++;
}
