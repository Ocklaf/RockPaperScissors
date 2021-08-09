let userSelection = "",
    computerSelection = "",
    scoreHuman = 0,
    scoreComputer = 0

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

    computerSelection = computerPlay()

    while (userSelection !== "piedra" && userSelection !== "papel" && userSelection !== "tijera") {
        userSelection = prompt("Escribe: Piedra, Papel o Tijera!!").toLowerCase()
    }

    if (userSelection === computerSelection) {
        console.log(`Empate!! ${userSelection} es igual a ${computerSelection}`)
    }
    else if (userSelection === "piedra" && computerSelection === "papel") {
        console.log("Has perdido!! La Piedra pierde frente Papel!!")
        scoreComputer++
    }
    else if (userSelection === "piedra" && computerSelection === "tijera") {
        console.log("Has ganado!! La Piedra gana a Tijera")
        scoreHuman++
    }

    else if (userSelection === "papel" && computerSelection === "piedra") {
        console.log("Has ganado!! El Papel gana a la Piedra!!")
        scoreHuman++
    }
    else if (userSelection === "papel" && computerSelection === "tijera") {
        console.log("Has perdido!! El Papel pierde contra Tijera!!")
        scoreComputer++
    }

    else if (userSelection === "tijera" && computerSelection === "piedra") {
        console.log("Has perdido!! Tijera pierde contra Piedra!!")
        scoreComputer++
    }
    else if (userSelection === "tijera" && computerSelection === "papel") {
        console.log("Has ganado!! La Tijera gana al Papel")
        scoreHuman++
    }
}

function game() {
    for (let i = 0; i <= 4; i++) {
        whoWin(userSelection, computerSelection)
    }
    console.clear()
    if (scoreHuman > scoreComputer) console.log(`Resultado final: Has ganado la partida "${scoreHuman}" vs "${scoreComputer}"`)
    else if (scoreHuman < scoreComputer) console.log(`Resultado final: Has perdido la partida "${scoreComputer}" vs "${scoreHuman}"`)
    else if (scoreHuman === scoreComputer) console.log(`Resultado final: Habéis empatado!!! "${scoreHuman}" vs "${scoreComputer}"`)
}

game()