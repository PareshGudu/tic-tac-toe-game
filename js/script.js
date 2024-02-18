let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO
let count = 0;
let WiningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked")
        if (turnO) {
            box.innerText = "O"
            box.style.backgroundColor = "red"
            box.style.color = "black"
            turnO = false;
        } else {
            box.innerText = "X"
            box.style.backgroundColor = "black"
            box.style.color = "white"
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        };
    });
});
let gameDraw = () => {
    msg.innerText = "Game Was Draw"
    msg.classList.remove("hide");
    disableBtn();
}

let checkWinner = () => {
    for (let pattern of WiningPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('winner', pos1val);
                showWinner(pos1val);
            }
        }
    }
}

let disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`
    msg.classList.remove("hide");
    disableBtn();
}

// Reset the Game 

let enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "";
        box.style.color = ""
    }
}
let resetGame = () => {
    turnO = true;
    enableBtn();
    msg.classList.add("hide")
}
ResetBtn.addEventListener("click", resetGame)

