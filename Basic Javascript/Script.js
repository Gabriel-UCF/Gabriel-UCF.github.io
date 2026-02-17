function tickUp(){
    let Counter = document.getElementById("counter");

    Counter.innerText = parseInt(Counter.innerText) + 1;
}

function tickDown(){
    let Counter = document.getElementById("counter");

    Counter.innerText = parseInt(Counter.innerText) - 1;
}

function runForLoop(){
    let Counter = document.getElementById("counter");
    let ForLoopResult = document.getElementById("forLoopResult");

    for (let i = 0; i <= parseInt(Counter.innerText); i++){
        ForLoopResult.innerText = ForLoopResult.innerText + " " + i;
    }
}

function showOddNumbers(){
    let Counter = document.getElementById("counter");
    let OddNumberResult = document.getElementById("oddNumberResult");

    for (let i = 0; i <= parseInt(Counter.innerText); i++){
        if (i % 2 == 1){
            OddNumberResult.innerText = OddNumberResult.innerText + " " + i;
        }
    }
}

function addMultiplesToArray(){
    let Counter = document.getElementById("counter");
    let MultiplesOfFive = [];

    for (let i = 1; i * 5 <= parseInt(Counter.innerText); i++){
        MultiplesOfFive.unshift(i * 5);
    }

    console.log(MultiplesOfFive);
}

function printCarObject(){
    let Car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    }

    console.log(Car);
}

function loadCar(Number){
    if (Number == 1){
        document.getElementById("carType").value = carObject1.cType
        document.getElementById("carMPG").value = carObject1.cMPG
        document.getElementById("carColor").value = carObject1.cColor
    } else if (Number == 2){
        document.getElementById("carType").value = carObject2.cType
        document.getElementById("carMPG").value = carObject2.cMPG
        document.getElementById("carColor").value = carObject2.cColor
    } else if (Number == 3){
        document.getElementById("carType").value = carObject3.cType
        document.getElementById("carMPG").value = carObject3.cMPG
        document.getElementById("carColor").value = carObject3.cColor
    }
}

function changeColor(Number){
    if (Number == 1){
        document.getElementById("styleParagraph").style.color = "red"
    } else if (Number == 2){
        document.getElementById("styleParagraph").style.color = "green"
    } else if (Number == 3){
        document.getElementById("styleParagraph").style.color = "blue"
    }
}