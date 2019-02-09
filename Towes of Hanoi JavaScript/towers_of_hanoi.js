const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class Game {
    constructor() {
        this.towers = [[3,2,1], [], []]
    }

    promptMove(callback) {
        console.log(`Tower 1: ${this.towers[0]}`);
        console.log(`Tower 2: ${this.towers[1]}`);
        console.log(`Tower 3: ${this.towers[2]}`);
        reader.question(`What tower do you want to take a disc from?`, (startTowerRes) => {
            reader.question(`What tower do you want to put that disc on?`, (endTowerRes) => {
                let startTowerIdx = parseInt(startTowerRes);
                let endTowerIdx = parseInt(endTowerRes);
                callback(startTowerIdx, endTowerIdx);
        });
    });
    }

    isValidMove(startTowerIdx, endTowerIdx) {
        if (this.towers[startTowerIdx].length === 0) {
            return false
        } else if (this.towers[endTowerIdx].length === 0){
            return true
        } else {
            let moveDisc = this.towers[startTowerIdx].pop();
            this.towers[startTowerIdx].push(moveDisc);
            let compareDisc = this.towers[endTowerIdx].pop();
            this.towers[endTowerIdx].push(compareDisc);
            if (moveDisc < compareDisc) {
                return true
            } else {
                return false
            }
        }
    };

    move(startTowerIdx, endTowerIdx){
        if (this.isValidMove(startTowerIdx, endTowerIdx)) {
            let moveDisc = this.towers[startTowerIdx].pop();
            this.towers[endTowerIdx].push(moveDisc);
            return true;
        } else {
            return false;
        }
    }

    print(arr){
        console.log(` | ${this.towers[0][2]} | ${this.towers[1][2]} | ${this.towers[2][2]}   `);
        console.log(` | ${this.towers[0][1]} | ${this.towers[1][1]} | ${this.towers[2][1]}   `);
        console.log(` | ${this.towers[0][0]} | ${this.towers[1][0]} | ${this.towers[2][0]}   `);
    }

    isWon(){
        if (this.towers[1].length === 3 || this.towers[2].length === 3){
            return true;
        } else {
            return false;
        }
    }

    run(completionCallback) {
        if (this.isWon()) {
            console.log("Congratulations! You've won!")
            completionCallback();
        };
        this.print(this.towers);
        let that = this;
        this.promptMove( function(startTowerIdx, endTowerIdx) {
            let moved = that.move(startTowerIdx, endTowerIdx);
            if (moved) {
                console.log(`Move Successful`);
            } else {
                console.log(`Move Unsuccessful`);
            }
            that.run();
        });
    }
}

const game = new Game();

game.run(function(){
    reader.close();
});