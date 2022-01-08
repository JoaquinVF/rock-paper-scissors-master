const btn_rules = document.getElementById("btn-rules");
const body = document.querySelector("body");

function mostrarInfo(){
    let info = document.getElementById("rules-info");
    document.querySelector("nav").style.display = "none";
    document.querySelector("main").style.display = "none";
    document.querySelector("section").style.display = "none";
    document.querySelector("footer").style.display = "none";
    info.style.display = "flex";
};

function mostrarMain() {
    let info = document.getElementById("rules-info");
    info.style.display = "none";
    document.querySelector("nav").style.display = "flex";
    document.querySelector("main").style.display = "flex";
    document.querySelector("section").style.display = "grid";
    document.querySelector("footer").style.display = "block";
};

function elegirMano(number) {
    let manoPicked;
    let houseSelect = Math.floor(Math.random() * 3);
    document.querySelector("section").style.display = "none";

    let newSection = document.createElement("section");
    let newYouPicked = document.createElement("p");
    let newHousePicked = document.createElement("p");
    let newYou = document.createElement("div");
    let newHouse = document.createElement("div");
    let newPickedImg = document.createElement("img");
    let newHouseImg = document.createElement("img");

    switch (number) {
        case 0:
            newYou.className += "papel";
            manoPicked = "paper";
            break;
        case 1:
            newYou.className += "tijera";
            manoPicked = "scissors";
            break;
        case 2:
            newYou.className += "piedra";
            manoPicked = "rock";
            break;
    }
    switch (houseSelect) {
        case 0:
            newHouse.className += "piedra";
            houseSelect = 'rock';
            break;
        case 1:
            newHouse.className += "papel";
            houseSelect = 'paper';
            break;
        case 2:
            newHouse.className += "tijera";
            houseSelect = 'scissors';
            break;
        default:
    }

    newPickedImg.className = "picked-img";
    newHouseImg.className = "house-img";

    newYouPicked.innerText = "YOU PICKED";
    newHousePicked.innerText = "THE HOUSE PICKED";

    newPickedImg.src = `./images/icon-${manoPicked}.svg`;
    newHouseImg.src = `./images/icon-${houseSelect}.svg`;

    newYou.appendChild(newPickedImg);
    newHouse.appendChild(newHouseImg);

    newSection.appendChild(newYouPicked);
    newSection.appendChild(newHousePicked);
    newSection.appendChild(newYou);
    newSection.appendChild(newHouse);
    document.querySelector("main").insertBefore(newSection, document.getElementsByTagName("section")[1]);

    newSection.style.backgroundImage = "none";
    newSection.style.marginBottom = "40px";
    newYouPicked.style.marginTop = "20px";
    newHousePicked.style.marginTop = "20px";

    newSection.style.display = "grid";
    newYouPicked.style.gridColumn = "1/2";
    newHousePicked.style.gridColumn = "2/3";
    newYou.style.gridColumn = "1/2";
    newYou.style.gridRow = "1/2";

    newHouse.style.gridColumn ="2/3";
    newHouse.style.gridRow = "1/2";

    newYouPicked.style.color = "white";
    newHousePicked.style.color = "white";

}

function whoWin(manoPicked, houseSelect) {
    if (manoPicked == houseSelect) {
        return "tie";
    }
    else if ((manoPicked == "paper" && houseSelect == "rock") || (manoPicked == "rock" && houseSelect == "scissors") || (manoPicked == "scissors" && houseSelect == "paper")){
        return "win";
    }
    else{
        return "lose";
    }
}