const { I } = inject();

module.exports = {

    //locators and pageObjects here
cupCake: {
    homePage: "http://www.cupcakeipsum.com/",
    cupCakeLogo: "//h1[@id='logo']",
    paragraphsLabel: "//input[@id='number_of_paragraphs']",
    shortRadioButton: "//label[contains(text(),'Short')]",
    startsWithCupcake: "//*[@name='startsWithCupcakeIpsum']",
    instanceText: "//*[contains(text(),'Cupcake ipsum dolor sit amet')]",
    instanceTextTwo: "//*[contains(text(),'Cupcake ipsum dolor sit')]",
    generateButton: "//button[@id='generate_button']",
    copyToClipBoard: "//button[@id='copy_button']",

},



    //Methods Go Here

verifyCupcakeTitle() {
    I.seeElement(this.cupCake.cupCakeLogo);
},

verifyNumberInParagraphs(number) {
    I.seeInField(this.cupCake.paragraphsLabel, number);
},

selectingShortRadioButton() {
    I.checkOption(this.cupCake.shortRadioButton);
},

selectingStartsWith() {
    I.checkOption(this.cupCake.startsWithCupcake);
},

seeingInstance() {
    I.seeElement(this.cupCake.instanceText);
},

seeingTwoInstances() {
    I.seeElement(this.cupCake.instanceTextTwo);
},

clickingGenerateButton() {
    I.click(this.cupCake.generateButton);
},

dontSeeCopyToClipBoard() {
    I.dontSeeElement(this.cupCake.copyToClipBoard);
},

}