class ClickerGame {

    constructor() {
        this.clickRecord = 0;
        this.companionNumber = 0;
        this.companionCost = 100;
        this.compounderNumber = 0;
        this.compounderCost = 10;
        this.clickWeight = 1;
    }

    clickRecord = 0;
    clickWeight;

    handleClick = function () {
        this.clickRecord += this.clickWeight;
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

    buyCompanion = () => {
        if (this.clickRecord >= this.companionCost) {
            this.addCompanion();
            this.clickRecord = this.clickRecord - this.companionCost;
            this.companionCostIncrease();
        }
    }

    addCompanionNumToClickRecord = () => {
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

    compounderWeightIncrease = () => {
        this.clickWeight = this.clickWeight + (this.clickWeight *.2);
    }

    buyCompounder = () => {
        if(this.clickRecord >= this.compounderCost){
            this.addCompounder();
            this.clickRecord = this.clickRecord - this.compounderCost;
            this.compounderCostIncrease();
            this.compounderWeightIncrease();
        }
    }


}

let cookieObject = new ClickerGame();
//setInterval(mainCookieObject.addCompanionNumToClickRecord(), 1000);

const updateClickRecorder = (clickRecorderElement, cookieObject) => {
    clickRecorderElement.innerText = cookieObject.getClickRecord();
}