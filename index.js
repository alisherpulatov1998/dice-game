function changeCards() {
    var randomNum1 = Math.floor((Math.random() * 6) + 1);
    var picName1 = "./images/dice" + randomNum1 + ".png";
    document.querySelector(".img1").setAttribute("src", picName1);

    var randomNum2 = Math.floor((Math.random() * 6) + 1);
    var picName2 = "./images/dice" + randomNum2 + ".png";
    document.querySelector(".img2").setAttribute("src", picName2);

    if (randomNum1 === randomNum2){
        document.querySelector("h1").innerHTML="🚩 DRAW! 🚩";
    }
    else if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML="🚩 PLAYER 1 WINS!";
    }
    else {
        document.querySelector("h1").innerHTML="PLAYER 2 WINS! 🚩";
    }
}
changeCards();