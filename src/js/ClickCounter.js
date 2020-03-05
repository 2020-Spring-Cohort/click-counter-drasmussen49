class ClickerGame {

    constructor() {
        this.clickRecord = 0;
        this.companionNumber = 0;
        this.companionCost = 100;
        this.compounderNumber = 0;
        this.compounderCost = 10;
    }

    clickRecord = 0;

    handleClick = function () {
        this.clickRecord += 1;
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
    companionCostIncrease = function () {
        this.companionCost = this.companionCost + (this.companionCost * .1);
    }

    buyCompanion = function () {
        if (this.clickRecord >= this.companionCost) {
            this.addCompanion();
            this.clickRecord = this.clickRecord - this.companionCost;
            this.companionCostIncrease();
        }
    }

    addCompanionNumToClickRecord = function () {
        this.clickRecord = this.companionNumber + this.clickRecord;
    }

    compounderNumber;
    compounderCost;

    getCompounderNumber = () => {
        return this.compounderNumber;
    }

    addCompounder = () => {
        this.compounderNumber++;
    }

    compounderCostIncrease = () => {
        this.compounderCost = this.compounderCost + (this.compounderCost * .1);
    }

    buyCompounder = () => {
        if(this.clickRecord >= this.compounderCost){
            this.addCompounder();
            this.clickRecord = this.clickRecord - this.compounderCost;
            this.compounderCostIncrease();
        }
    }


}

let mainCookieObject = new ClickerGame();
setInterval(mainCookieObject.addCompanionNumToClickRecord(), 1000);