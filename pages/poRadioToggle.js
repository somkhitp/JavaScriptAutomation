const { I } = inject();

module.exports = {

    //Locators and Page Objects
radioToggles: {
    radioContainer: "//div[@class='radio-btns']//span",
    descRadioToggle: "//p[@class='desc']",
    demoH: "//h2[contains(text(),'Demo')]",
    selectedItem: "//div[@class='result']",
    selectedItemOne: "//div[@class='result'][contains(text(),'Value 1')]",
    selectedItemTwo: "//div[@class='result'][contains(text(),'Value 2')]",
    selectedItemFour: "//div[@class='result'][contains(text(),'Value 4')]",
    selectedItemFive: "//div[@class='result'][contains(text(),'Value 5')]",
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
    I.wait(1);
    I.seeElement(this.radioToggles.selectedItemOne);
},

verifyValueTwo() {
    I.click(this.radioToggles.valueTwo);
    I.wait(1);
    I.seeElement(this.radioToggles.selectedItemTwo);
},

verifyValueFour() {
    I.click(this.radioToggles.valueFour);
    I.wait(1);
    I.seeElement(this.radioToggles.selectedItemFour);
},

verifyValueFive() {
    I.click(this.radioToggles.valueFive);
    I.wait(1);
    I.seeElement(this.radioToggles.selectedItemFive);
},

}