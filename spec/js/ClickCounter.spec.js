describe("Click Counter Calamity", function () {

    describe("Main Clicker", function () {


        let sut;
        let testClickHandler;
        let testClickRecorder;
        let testCompanionBuyer;
        let testCompanionCount;
        let testCompounderBuyer;
        let testCompounderCount;

        beforeEach(function () {
            sut = new ClickerGame();
            sut.clickRecord = 0;
            testClickHandler = document.createElement('button');
            testClickRecorder = document.createElement('div');
            testCompanionBuyer = document.createElement('button');
            testCompanionCount = document.createElement('div');
            testCompounderBuyer = document.createElement('button');
            testCompounderCount = document.createElement('div');
            makeClickHandlerButton(testClickHandler, testClickRecorder, sut);

        })

        describe("handleClick", () => {

            it('should add 1 to clickRecord', () => {
                sut.handleClick();
                expect(sut.clickRecord).toBe(1);
            })
        })
        describe("getClickRecord", () => {
            it('should return clickRecord of 1 after handleClick performs', () => {
                sut.handleClick();
                expect(sut.getClickRecord()).toBe(1);
            })
        })

        describe("Companion Clicker", function () {

            describe("Companion Clicker properties", () => {
                it('should have a companionClickerNumber field', () => {
                    expect(sut.companionNumber).not.toBe(null);
                })
            })
            describe("Companion Clicker action", () => {
                it('should be able to add to companionNumber', () => {
                    sut.addCompanion();
                    expect(sut.companionNumber).toBe(1);
                })
                it('should be able to retrieve new companionNumber after adding to it', () => {
                    sut.clickRecord = 100;
                    sut.addCompanion();
                    expect(sut.getCompanionNumber()).toBe(1);
                })
                it('should subtract clickRecord count when companion is bought', () => {
                    sut.clickRecord = 100;
                    sut.buyCompanion();
                    expect(sut.getClickRecord()).toBe(0);
                })
                it('should add 1 to my companionNumber when I buy a companion', () => {
                    sut.clickRecord = 100;
                    sut.companionNumber = 0;
                    sut.buyCompanion();
                    expect(sut.getCompanionNumber()).toBe(1);
                })
                it('should increase the companionCost by 10% after buying a companion', () => {
                    sut.clickRecord = 100;
                    sut.buyCompanion();
                    expect(sut.companionCost).toBe(110);
                })
                it('should not allow user to buy companion without sufficient clicks', () => {
                    sut.clickRecord = 90;
                    sut.buyCompanion();
                    expect(sut.companionNumber).toBe(0);
                })
                it('should add companion count to clickRecord when related function called', () => {
                    sut.clickRecord = 100;
                    sut.buyCompanion();
                    sut.addCompanionNumToClickRecord();
                    expect(sut.getClickRecord()).toBe(1);
                })
            })
        })

        describe("Culminating Compounding", () => {
            it('should return 0 for when there is no compounder', () => {
                expect(sut.getCompounderNumber()).toBe(0);
            })
            it('should add 1 to compounderNumber when compounder is bought', () => {
                sut.addCompounder();
                expect(sut.getCompounderNumber()).toBe(1);
            })
            it('should reduce clickRecord by 10 when first compounder is bought', () => {
                sut.clickRecord = 30;
                sut.buyCompounder();
                expect(sut.getClickRecord()).toBe(20);
            })
            it('should increase the compounderCost by 10% after buying a compounder', () => {
                sut.clickRecord = 100;
                sut.buyCompounder();
                expect(sut.compounderCost).toBe(11);
            })
            it('should not allow user to buy compounder without sufficient clicks', () => {
                sut.clickRecord = 9;
                sut.buyCompounder();
                expect(sut.compounderNumber).toBe(0);
            })
            it('should have handleClick return 1.2 clicks after buying compounder', () => {
                sut.clickRecord = 10;
                sut.buyCompounder();
                sut.handleClick();
                expect(sut.getClickRecord()).toBe(1.2);
            })
        })

        describe("DOM Methods", () => {
            
            describe("Main Click functions", () => {
                it('should show 0 in clickRecording element before any clicks are performed', () => {
                    updateClickRecorder(testClickRecorder, sut);
                    expect(testClickRecorder.innerText).toBe('0');
                })
                it('should update the clickRecording element after handleClick button is pushed', () => {
                    sut.handleClick();
                    updateClickRecorder(testClickRecorder, sut);
                    expect(testClickRecorder.innerText).toBe('1');
                })
            })
            describe("makeHandleClicker() creates a button out of passed button, calls handleClick() when clicked", () =>{
                it('should make getClickRecord() return 1 after handleClick() button is pushed', () => {
                    testClickHandler.click();
                    expect(sut.getClickRecord()).toBe(1);
                })
                it('should show 1 in clickRecordElement after handleClick() button is pushed', () =>{
                    testClickHandler.click();
                    expect(testClickRecorder.innerText).toBe('1');
                })
            })


        })
    })
})