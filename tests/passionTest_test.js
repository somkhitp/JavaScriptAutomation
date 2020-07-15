
Feature('Somkhit Challenge');

Before((I) => {});

Scenario('Seeing Homepage @tea', (I, poPassion) => {
    poPassion.homePageURL(),
    poPassion.seeingTitle(),
    poPassion.seeingHerbalTeaText(),
    poPassion.seeingMoreThan(),
    poPassion.seeHerbalTea(),
    poPassion.seeLooseTea(),
    poPassion.seeFlavoredTea()
});

Scenario('Clicking First See Collection Link Redirect Functionality @tea', (I, poPassion) => {
    poPassion.homePageURL(),
    poPassion.seeHerbalTea(),
    poPassion.clickingHerbalTea()
});

Scenario('Our Passion Functionality @tea', (I, poPassion) => {
    poPassion.homePageURL(),
    poPassion.ourPassionText('Our Passion'),
    poPassion.clickingOurPassion(),
    poPassion.seeTitleTwo(),
    poPassion.seeTitleThree()
});

Scenario('Menu-Html Page @tea', (I, poPassion) => {
    poPassion.redirectURL(),
    poPassion.verifyMenuTitleOne(),
    poPassion.verifyMenuTitleTwo(),
    poPassion.checkoutButtonOne(),
    poPassion.checkoutButtonTwo()
});

Scenario('Navigating to Checkout Page and Filling In Billing Information @tea', (I, poPassion) => {
    poPassion.redirectURL(),
    poPassion.checkoutButtonOne(),
    poPassion.clickingCheckoutButtonOne(),
    poPassion.enteringEmail('john.smith@test.com'),
    poPassion.enteringName('John Smith'),
    poPassion.enteringAddress('123 Read Ave. New Orleans, LA 70123'),
    poPassion.selectingCardType(),
    poPassion.enteringCardNumber(1234567890123456),
    poPassion.enteringCardHolderName('John Smith'),
    poPassion.cidNumber(123),
    poPassion.orderButtonClick()
});