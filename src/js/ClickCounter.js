class ClickerGame {

    constructor() {
        this.clickRecord = 0;
        this.companionNumber = 0;
        this.companionCost = 100;
    }

    clickRecord = 0;

    handleClick = function () {
        this.clickRecord++;
    }
    getClickRecord = function () {
        return this.clickRecord;
    }

    companionNumber = 0;
    companionCost;

    addCompanion = function () {
        this.companionNumber++;
    }
    getCompanionNumber = function () {
        return this.companionNumber;
    }

    buyCompanion = function () {
        if (this.clickRecord >= this.companionCost) {
            this.addCompanion();
            this.clickRecord = this.clickRecord - this.companionCost;
            this.companionCost = this.companionCost + (this.companionCost * .1);
        }
    }
}