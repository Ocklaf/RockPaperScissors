let userSelection = "",
    computerSelection = "",
    scoreHuman = 0,
    scoreComputer = 0

const $btns = document.querySelectorAll("button"),
    $div = document.querySelector("#container-result"), $p = document.createElement("p"),
    $divElement = document.createElement("div")


$btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (btn.id) {
            userSelection = "piedra"
            game()
        }
        else if (btn.id) {
            userSelection = "papel"
            game()
        }
        else if (btn.id) {
            userSelection = "tijera"
            game()
        }
    })
})
// console.log(computerSelection)

function computerPlay() {
    let rockPaperScissors = Math.floor((Math.random() * 10) + 1)

    while (rockPaperScissors !== 1 && rockPaperScissors !== 2 && rockPaperScissors !== 3) {
        rockPaperScissors = Math.floor((Math.random() * 10) + 1)
    }

    if (rockPaperScissors === 1) return ("piedra")
    else if (rockPaperScissors === 2) return ("papel")
    else return ("tijera")
}

function whoWin(userSelection, computerSelection) {

    // if (userSelection === "") 
    computerSelection = computerPlay()

    if (userSelection === computerSelection) {
        $div.textContent = (`Empate!! ${userSelection} es igual a ${computerSelection}`)
    }
    else if (userSelection === "piedra" && computerSelection === "papel") {
        $div.textContent = ("Has perdido!! La Piedra pierde frente Papel!!")
        scoreComputer++
    }
    else if (userSelection === "piedra" && computerSelection === "tijera") {
        $div.textContent = ("Has ganado!! La Piedra gana a Tijera")
        scoreHuman++
    }

    else if (userSelection === "papel" && computerSelection === "piedra") {
        $div.textContent = ("Has ganado!! El Papel gana a la Piedra!!")
        scoreHuman++
    }
    else if (userSelection === "papel" && computerSelection === "tijera") {
        $div.textContent = ("Has perdido!! El Papel pierde contra Tijera!!")
        scoreComputer++
    }

    else if (userSelection === "tijera" && computerSelection === "piedra") {
        $div.textContent = ("Has perdido!! Tijera pierde contra Piedra!!")
        scoreComputer++
    }
    else if (userSelection === "tijera" && computerSelection === "papel") {
        $div.textContent = ("Has ganado!! La Tijera gana al Papel")
        scoreHuman++
    }
}

function game() {
    if (scoreHuman <= 4 && scoreComputer <= 4) {
        whoWin(userSelection, computerSelection)
        $div.insertAdjacentElement("afterend", $divElement).textContent = (`Score Panel:\n YOU: ${scoreHuman} VS COMPUTER: ${scoreComputer}`)
        if(scoreHuman === 5 || scoreComputer === 5) game()
    } else if (scoreHuman === 5){
        $div.insertAdjacentElement("afterend", $divElement).textContent = (`YOU WIN!!!!!\nYOU: ${scoreHuman} VS COMPUTER: ${scoreComputer}`)
    } else if (scoreComputer === 5){
        $div.insertAdjacentElement("afterend", $divElement).textContent = (`COMPUTER WIN!!!!!\nYOU: ${scoreHuman} VS COMPUTER: ${scoreComputer}`)
    }
}