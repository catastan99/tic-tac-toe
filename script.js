class TicTacToe {
    constructor() {
        this.table = [null, null, null, null, null, null, null, null, null]
        this.tableItemCompleted = 0
        this.player = false
        this.isCompleted = false
        this.player1 = ''
        this.player2 = ''
    }

    getIsCompleted() {
        return this.isCompleted
    }

    showTable() {
        this.table.forEach((tableItem, index) => {
            cells[index].innerText = tableItem
        })
    }

    completeTable(index) {
        if (this.table[index] !== null || this.isCompleted === true) return
        if (!this.player) this.table[index] = '0'
        else this.table[index] = 'X'
        this.tableItemCompleted++
    }

    changePlayer() {
        this.player = !this.player
    }

    firstDiagonalCheck(value) {
        if (this.table[0] === this.table[4] && this.table[4] == this.table[8] && this.table[8] === value) return true
        return false
    }

    secondDiagonalCheck(value) {
        if (this.table[2] === this.table[4] && this.table[4] == this.table[6] && this.table[6] === value) return true
        return false
    }

    horizontalCheck(value) {
        if (this.table[0] === this.table[1] && this.table[1] == this.table[2] && this.table[2] === value) return true
        if (this.table[3] === this.table[4] && this.table[4] == this.table[5] && this.table[5] === value) return true
        if (this.table[6] === this.table[7] && this.table[7] == this.table[8] && this.table[8] === value) return true
        return false
    }

    verticalCheck(value) {
        if (this.table[0] === this.table[3] && this.table[3] == this.table[6] && this.table[6] === value) return true
        if (this.table[1] === this.table[4] && this.table[4] == this.table[7] && this.table[7] === value) return true
        if (this.table[2] === this.table[5] && this.table[5] == this.table[8] && this.table[8] === value) return true
        return false
    }

    winnerCheck() {
        if (this.tableItemCompleted < 5) return

        if (this.firstDiagonalCheck('0') || this.secondDiagonalCheck('0') || this.horizontalCheck('0') || this.verticalCheck('0')) {
            this.isCompleted = true;
            return `${this.player1} won`
        }

        if (this.firstDiagonalCheck('X') || this.secondDiagonalCheck('X') || this.horizontalCheck('X') || this.verticalCheck('X')) {
            this.isCompleted = true;
            return `${this.player2} won`
        }

        if (this.tableItemCompleted === 9) return "Remiza"
    }
}





const cells = document.querySelectorAll('.cell');
const winner = document.querySelector("#winner")
const player1Input = document.querySelector('#player1-input')
const player2Input = document.querySelector('#player2-input')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const playButton = document.querySelector('#play-button')
const modal = document.querySelector("#modal")
const game = new TicTacToe()
game.showTable()
playButton.addEventListener('click', function () {
    if (!player1Input.value || !player2Input.value) return
    game.player1 = player1Input.value
    game.player2 = player2Input.value
    player1.innerText = player1Input.value
    player2.innerText = player2Input.value
    modal.style.animation = "exit 1.8s forwards"
})



cells.forEach((cell, index) => {
    cell.addEventListener('click', function () {
        game.completeTable(index)
        game.showTable()
        let winnerName = game.winnerCheck()
        if (winnerName !== undefined) winner.innerText = winnerName
        else game.changePlayer()
    })
})