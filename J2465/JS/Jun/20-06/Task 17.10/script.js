var diceFaces = [
    "assets/images/1.png",
    "assets/images/2.png",
    "assets/images/3.png",
    "assets/images/4.png",
    "assets/images/5.png",
    "assets/images/6.png",
]

function onBtnThrowDiceClick(){
    console.log("Tung xúc xắc")
    var num = getRandomNumber()
    console.log(num)
    changeDiceFace(num)
    displayMessage(num)
}

function getRandomNumber(){
    var num = Math.floor(Math.random() * 6 + 1)
    return num
}

function changeDiceFace(num){
    var diceFaceImg = document.getElementById("dice-image")

    if(num === 1){
        diceFaceImg.src = diceFaces[0]
    }
    if(num === 2){
        diceFaceImg.src = diceFaces[1]
    }
    if(num === 3){
        diceFaceImg.src = diceFaces[2]
    }
    if(num === 4){
        diceFaceImg.src = diceFaces[3]
    }
    if(num === 5){
        diceFaceImg.src = diceFaces[4]
    }
    if(num === 6){
        diceFaceImg.src = diceFaces[5]
    }
}

function displayMessage(num){
    var messElement = document.getElementById("h-message")
    messElement.style.visibility = "visible"
    if(num >= 1 && num <= 3){
        messElement.innerHTML = "Cảm ơn bạn. Hãy cố gắng lần sau!"
        messElement.style.color = "orange"
    } else {
        messElement.innerHTML = "Chúc mừng bạn. Hãy chơi ván nữa!"
        messElement.style.color = "purple"
    }
}