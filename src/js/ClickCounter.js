const mainClickButtonElement = document.querySelector("#main-clicker");
const clickRecordElement = document.querySelector("#click-record");

const companionBuyId = document.querySelector("#companion-clicker");
const companionCountId = document.querySelector("#companion-count");

const compounderBuyId = document.querySelector("#compounder-clicker");
const compounderCountId = document.querySelector("#compounder-count");

const clickWeightElementId = document.querySelector("#click-weight");


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
    getClickWeight = function() {
        return this.clickWeight;
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
        updateClickRecorder(clickRecordElement, cookieObject);
        updateClickWeight(clickWeightElementId, cookieObject);
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
        this.clickWeight = this.clickWeight + (this.clickWeight * .2);
    }

    buyCompounder = () => {
        if (this.clickRecord >= this.compounderCost) {
            this.addCompounder();
            this.clickRecord = this.clickRecord - this.compounderCost;
            this.compounderCostIncrease();
            this.compounderWeightIncrease();
        }
    }


}

let cookieObject = new ClickerGame();
const autoClick = () => {
    setInterval(() => {cookieObject.addCompanionNumToClickRecord()}, 1000)
};

const infoAlertBox = () => {
    alert("Hello! We here at Coo Coo Computing Challengers are happy to bring such products as Cookie Clicker Calamity to our users! We love programming and using it to bring games and products to life!")
}

const updateClickRecorder = (clickRecorderElementId, mainObject) => {
    clickRecorderElementId.innerText = mainObject.getClickRecord();
}

const updateCompanionCount = (companionCountElementId, mainObject) => {
    companionCountElementId.innerText = mainObject.getCompanionNumber();
}

const updateCompounderCount = (compounderCountElementId, mainObject) => {
    compounderCountElementId.innerText = mainObject.getCompounderNumber();
}

const updateClickWeight = (clickWeightElementId, mainObject) => {
    clickWeightElementId.innerText = mainObject.getClickWeight();
}

const makeClickHandlerButton = (mainClickButtonId, clickRecordElementId, mainObject) => {
    mainClickButtonId.addEventListener('click', () => {
        mainObject.handleClick();
        updateClickRecorder(clickRecordElementId, mainObject);
    })
}

const makeCompanionBuyButton = (companionBuyId, companionCountElementId, mainObject) => {
    companionBuyId.addEventListener('click', () => {
        mainObject.buyCompanion();
        updateCompanionCount(companionCountElementId, mainObject);
    })
}

const makeCompounderBuyButton = (compounderBuyId, compounderCountElementId, mainObject) => {
    compounderBuyId.addEventListener('click', () => {
        mainObject.buyCompounder();
        updateCompounderCount(compounderCountElementId, mainObject);
    })
}


updateClickRecorder(clickRecordElement, cookieObject);
makeClickHandlerButton(mainClickButtonElement, clickRecordElement, cookieObject);

updateCompanionCount(companionCountId, cookieObject);
makeCompanionBuyButton(companionBuyId, companionCountId, cookieObject);

updateCompounderCount(compounderCountId, cookieObject);
makeCompounderBuyButton(compounderBuyId, compounderCountId, cookieObject);

updateClickWeight(clickWeightElementId, cookieObject);