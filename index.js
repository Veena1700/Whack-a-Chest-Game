let currTreasureTile;
let currBarrelTile;
let score = 0;
let gameOver = false;


// window.onload(
//     setGame()
// )

// setInterval(setTreasure(),1000);

setGame();

function setGame(){
    // setInterval(setTreasure,1000);
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setTreasure,1000);
    setInterval(setBarrel,1000);
}

function setTreasure(){

    if(gameOver)
        return;

    if(currTreasureTile){
        currTreasureTile.innerHTML = ""
    }
    
    let treasure = document.createElement("img");
    treasure.src = "images/treasure-chest.png";

    let num = Math.floor(Math.random() * 9);
    num = num.toString();

    if(currBarrelTile && currBarrelTile.id == num){
        return;
    }

    currTreasureTile = document.getElementById(num);
    currTreasureTile.appendChild(treasure);
}

function setBarrel(){

    if(gameOver)
        return;

    let barrel = document.createElement("img");
    barrel.src = "images/barrel.png";

    let num = Math.floor(Math.random() * 9);
    num = num.toString();

    if(currBarrelTile){
        currBarrelTile.innerHTML = ""
    }

    if(currTreasureTile && currTreasureTile.id == num){
        return;
    }

    currBarrelTile = document.getElementById(num);
    currBarrelTile.appendChild(barrel);
}

function selectTile(){

    if(gameOver)
        return;

    if(this == currTreasureTile){
        score += 10;
        document.getElementById("score").innerHTML = score.toString();
    }

    let restart = document.createElement("button");
    restart.id = "restart"
    restart.innerText = "Restart";
    restart.addEventListener("click", restartGame);

    if(this == currBarrelTile){
        gameOver = true;
        document.getElementById("score").innerHTML = "GAME OVER: " + score.toString();
        document.getElementById("score").appendChild(restart);
    }

}

function restartGame(){
    gameOver = false;

    score = 0;
    document.getElementById("score").innerHTML = score.toString();

    document.getElementById("score").removeChild(document.getElementById("restart"));

    currBarrelTile.innerHTML = "";
    currTreasureTile.innerHTML = "";

}