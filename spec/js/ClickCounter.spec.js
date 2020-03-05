describe("Click Counter Calamity", function () {

    describe("Main Clicker", function () {


        let sut;

        beforeEach(function () {
            sut = new ClickerGame();
            sut.clickRecord = 0;
        })

        describe("handleClick", function () {

            it('should add 1 to clickRecord', function () {
                sut.handleClick();
                expect(sut.clickRecord).toBe(1);
            })
        })
        describe("getClickRecord", function () {
            it('should return clickRecord of 1 after handleClick performs', function () {
                sut.handleClick();
                expect(sut.getClickRecord()).toBe(1);
            })
        })


        describe("Companion Clicker", function () {

            describe("Companion Clicker properties", function () {
                it('should have a companionClickerNumber field', function () {
                    expect(sut.companionNumber).not.toBe(null);
                })
            })
            describe("Companion Clicker action", function () {
                it('should be able to add to companionNumber', function () {
                    sut.addCompanion();
                    expect(sut.companionNumber).toBe(1);
                })
                it('should be able to retrieve new companionNumber after adding to it', function () {
                    sut.clickRecord = 100;
                    sut.addCompanion();
                    expect(sut.getCompanionNumber()).toBe(1);
                })
                it('should subtract clickRecord count when companion is bought', function () {
                    sut.clickRecord = 100;
                    sut.buyCompanion();
                    expect(sut.getClickRecord()).toBe(0);
                })
                it('should add 1 to my companionNumber when I buy a companion', function () {
                    sut.clickRecord = 100;
                    sut.companionNumber = 0;
                    sut.buyCompanion();
                    expect(sut.getCompanionNumber()).toBe(1);
                })
                it('should increase the companionCost by 10% after buying a companion', function () {
                    sut.clickRecord = 100;
                    sut.buyCompanion();
                    expect(sut.companionCost).toBe(110);
                })
                it('should not allow user to buy companion without sufficient clicks', function () {
                    sut.clickRecord = 90;
                    sut.buyCompanion();
                    expect(sut.companionNumber).toBe(0);
                })
                it('should add companion count to clickRecord when related function called', () =>{
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
            it('should increase the compounderCost by 10% after buying a compounder', function () {
                sut.clickRecord = 100;
                sut.buyCompounder();
                expect(sut.compounderCost).toBe(11);
            })
            it('should not allow user to buy compounder without sufficient clicks', function () {
                sut.clickRecord = 9;
                sut.buyCompounder();
                expect(sut.compounderNumber).toBe(0);
            })
            


        })
    })
})