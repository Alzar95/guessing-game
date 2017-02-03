class GuessingGame {
    constructor() {
        this.solution = 0;
        this.tmp = 0;
    }

    setRange(min, max) {
        this.solution = Math.round((min + max) / 2);
        this.tmp = this.solution;
    }

    guess() {
        return this.solution;
    }

    lower() {
        this.tmp = Math.round(this.tmp) / 2;
        this.solution -= Math.floor(this.tmp);
        return this.solution;
    }

    greater() {
        if(this.solution > this.tmp) {
            this.tmp /= 2;
        } else {
            this.tmp = this.solution / 2;
        }
        this.solution += Math.round(this.tmp);
        return this.solution;
    }
}

module.exports = GuessingGame;
