const { I } = inject();

module.exports = {

    //Locators and Page Objects
radioToggles: {
    radioContainer: "//div[@class='radio-btns']//span",
    descRadioToggle: "//p[@class='desc']",
    demoH: "//h2[contains(text(),'Demo')]",
    selectedItem: "//div[@class='result']",
    valueOne: "//label[contains(text(),'Value 1')]",
    valueTwo: "//label[contains(text(),'Value 2')]",
    valueFour: "//label[contains(text(),'Value 4')]",
    valueFive: "//label[contains(text(),'Value 5')]",

},

    //Methods

verifyHeaderOne() {
    I.seeElement(this.radioToggles.descRadioToggle);
},

verifyDemo() {
    I.seeElement(this.radioToggles.demoH);
},

verifySelectedItem() {
    I.seeElement(this.radioToggles.selectedItem);
},

verifyValueOne() {
    I.click(this.radioToggles.valueOne);
    I.wait(2);
    I.seeElement(this.radioToggles.selectedItem);
},

verifyValueTwo() {
    I.click(this.radioToggles.valueTwo);
    I.wait(2);
    I.seeElement(this.radioToggles.selectedItem);
},

verifyValueFour() {
    I.click(this.radioToggles.valueFour);
    I.wait(2);
    I.seeElement(this.radioToggles.selectedItem);
},

verifyValueFive() {
    I.click(this.radioToggles.valueFive);
    I.wait(2);
    I.seeElement(this.radioToggles.selectedItem);
},

}