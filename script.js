let res = document.querySelector(".res");
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let cnt = 0;

function check() {
    for (let i = 0; i < 3; i++) {
        let check = 0;
        for (let j = 0; j < 2; j++) {
            if (board[i][j] !== board[i][j + 1]) {
                check = 1;
            }
        }
        if (check === 0 && board[i][0] !== null) {
            return board[i][0];
        }
    }

    for (let j = 0; j < 3; j++) {
        let check = 0;
        for (let i = 0; i < 2; i++) {
            if (board[i][j] !== board[i + 1][j]) {
                check = 1;
            }
        }
        if (check === 0 && board[0][j] !== null) {
            return board[0][j];
        }
    }

    if (
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] !== null
    ) {
        return board[0][0];
    }
    if (
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[0][2] !== null
    ) {
        return board[0][2];
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === null) {
                return "C";
            }
        }
    }

    return "D";
}

function resetBoard() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    cnt = 0;
    document.querySelectorAll(".col").forEach((cell) => {
        cell.innerText = "";
    });
}

function func(row, col) {
    let ch = check();
    if (ch !== "C") {
        if (ch === "X") {
            res.innerText = "Winner is X";
        } else if (ch === "O") {
            res.innerText = "Winner is O";
        } else if (ch === "D") {
            res.innerText = "Game is draw";
        }

        resetBoard();
    }
}

let items = document.querySelectorAll(".col");
items.forEach((item) => {
    item.addEventListener("click", function () {
        res.innerText = "";
        let content = this.innerText;

        if (content) return;

        let row = Number(this.dataset.row);
        let col = Number(this.dataset.col);

        if (cnt === 0) {
            this.innerText = "X";
            this.style.color = "darkblue";
            this.style.fontWeight = "bold";
            this.style.fontSize = "40px";
            board[row][col] = "X";
            cnt++;
        } else {
            this.innerText = "O";
            this.style.color = "pink";
            this.style.fontWeight = "bold";
            this.style.fontSize = "40px";
            board[row][col] = "O";
            cnt--;
        }

        func(row, col);
    });
});
