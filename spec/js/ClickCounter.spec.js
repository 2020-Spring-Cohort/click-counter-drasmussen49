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
                    sut.addCompanion();
                    expect(sut.getCompanionNumber()).toBe(1);
                })
                it('should subtract clickRecord count when companion is bought', function () {
                    sut.clickRecord = 100;
                    sut.buyCompanion();
                    expect(sut.getClickRecord()).toBe(0);
                })
                it('should add 1 to my companionNumber when I buy a companion', function() {
                    sut.companionNumber = 0;
                    sut.buyCompanion();
                    expect(sut.getCompanionNumber()).toBe(1);
                })
                it('should increase the companionCost by 10% after buying a companion', function(){
                    sut.buyCompanion();
                    expect(sut.companionCost).toBe(110);
                    console.log(sut.companionCost);
                })
            })

        })

    })
})