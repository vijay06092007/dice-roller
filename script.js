const diceImg = document.querySelector("#dice")
const txt = document.querySelector("#text")
const btn = document.querySelector("#roll-btn")

function rollDice() {
    diceImg.src = "probability.png"
    txt.textContent = "rolling...."

    diceNum = Math.floor(Math.random()*6+1)
    setTimeout(() => {
        diceImg.src = `${diceNum}.png`
        txt.textContent = ""
    }, 1500);
}

btn.addEventListener("click",rollDice)