Feature('Challenge, Cupcakes');

Before((I) => {
    I.amOnPage('http://www.cupcakeipsum.com/')
});

Scenario('Cupcakes Verification @cupcake', (I, poCupcakes) => {
    poCupcakes.verifyCupcakeTitle();
    poCupcakes.verifyNumberInParagraphs('5');
    poCupcakes.selectingShortRadioButton();
    poCupcakes.selectingStartsWith();
    poCupcakes.seeingInstance();
    I.dontSee('Copy to Clipboard');
    poCupcakes.clickingGenerateButton();
    poCupcakes.seeingTwoInstances();
});