// draw the baord

// pick who goes first

// use rnadom nmber to find 0 or 1;

const poss = ["x", "o"]

const rand = Math.floor(Math.random() * 2)

let tp = poss[rand]

const allBoxes = document.querySelectorAll('.box');

let didWin = false;

allBoxes.forEach(function (box) {
    box.addEventListener("click", function (e) {
        console.log(e)

        if (e.target.textContent !== "" || didWin) {
            return
        }

        // show where clicked
        e.target.textContent = tp
        if (tp === "x") {
            tp = "o"
        } else {
            tp = "x"
        }
        //                                                                                                            ______
        //                                                                                                           /  ___ \
        //                                                                                    _                     |__|   | |
        // |         |   \                    /                 \                    /       |_|       _                   | |
        // |         |    \                  /                   \                  /         _       |  \      |         / /
        // |         |     \                /                     \                /         | |      |   \     |        / /
        // -----------      \      /\      /                       \      /\      /          | |      |    \    |        | |
        // |         |       \    /  \    /                         \    /  \    /           | |      |     \   |        |_|
        // |         |        \  /    \  /                           \  /    \  /            | |      |      \  |         _
        // |         |         \/      \/                             \/      \/             |_|      |       \_|        |_|
        const box1 = document.querySelector('#box1').textContent;
        const box2 = document.querySelector('#box2').textContent;
        const box3 = document.querySelector('#box3').textContent;
        const box4 = document.querySelector('#box4').textContent;
        const box5 = document.querySelector('#box5').textContent;
        const box6 = document.querySelector('#box6').textContent;
        const box7 = document.querySelector('#box7').textContent;
        const box8 = document.querySelector('#box8').textContent;
        const box9 = document.querySelector('#box9').textContent;

        if (box1 === box2 &&
            box1 === box3 &&
            box1 !== "") {
            didWin = true;
            console.log('win')

        } else if (box4 === box5 &&
            box4 === box6 &&
            box4 !== "") {
            didWin = true;
            console.log('win')

        } else if (box7 === box8 &&
            box7 === box9 &&
            box7 !== "") {
            didWin = true;
            console.log('win')

        } else if (box1 === box5 &&
            box1 === box9 &&
            box1 !== "") {
            didWin = true;
            console.log('win')

        } else if (box3 === box5 &&
            box3 === box7 &&
            box3 !== "") {
            didWin = true;
            console.log('win')

        } else if (box1 === box4 &&
            box1 === box7 &&
            box1 !== "") {
            didWin = true;
            console.log('win')

        } else if (box2 === box5 &&
            box2 === box8 &&
            box2 !== "") {
            didWin = true;
            console.log('win')

        } else if (box3 === box6 &&
            box3 === box9 &&
            box3 !== "") {
            didWin = true;
            console.log('win')

        } else {
            console.log("No win")
        }

        if (didWin) {
            if (tp === "x") {
                tp = "o"
            } else {
                tp = "x"
            }
            document.querySelector("#message").textContent = tp + " wins"
        }
    })
});



