const { I } = inject();

module.exports = {

  //Page Objects and Locators

passionTea: {
    homePage: "http://www.practiceselenium.com/",
    titleOne: "//*[contains(text(),'passionate about tea')]",
    titleTwo: "//*[contains(text(),'We believe the calming sensation that comes from drinking tea is universal')]",
    titleThree: "//*[contains(text(),'The Passion Tea Company team is just as diverse as its flavors.')]",

passionClickableLinks: {
    herbalTeaButton: "//*[contains(@class,'wsb-element-button')][2]",
    looseTeaButton: "//*[contains(@class,'wsb-element-button')][3]",
    flavoredTeaButton: "//*[contains(@class,'wsb-element-button')][1]",
    ourPassion: ".wsb-navigation-rendered-top-level-menu:nth-child(2) li:nth-child(2)"
},

    redirectLink: "http://www.practiceselenium.com/menu.html"
},

menuPageObjects: {
    menuTitleOne: "//*[contains(text(),'is made from the leaves from')]",
    menuTitleTwo: "//*[contains(text(),'Red Tea is actually a South African herb cultivated only in the mountains')]",
    checkOutCTAOne: "//*[contains(@class,'wsb-element-button')][2]",
    checkoutCTATwo: "//*[contains(@class,'wsb-element-button')][1]",
    checkoutPage: "http://www.practiceselenium.com/check-out.html"
},

billingInformation: {
  emailField: "//input[@id='email']",
  nameField: "//input[@id='name']",
  addressField: "//*[@id='address']",
  cardTypeField: "//*[@id='card_type']/option",
  selectingVisa: "//*[contains(text(),'Visa')]",
  cardNumberField: "//input[@id='card_number']",
  cardHolderNameField: "//input[@id='cardholder_name']",
  verificationCodeField: "//input[@id='verification_code']",
  placeOrderCTAButton: "//button[@class='btn btn-primary']"
},

  //Methods

homePageURL() {
  I.amOnPage(this.passionTea.homePage); 
},

redirectURL() {
  I.amOnPage(this.passionTea.redirectLink);
},

onCheckoutPage() {
  I.amOnPage(this.menuPageObjects.checkoutPage);
},

seeingTitle() {
  I.seeElement(this.passionTea.titleOne);
},

seeTitleTwo() {
  I.seeElement(this.passionTea.titleTwo);
},

seeTitleThree() {
  I.seeElement(this.passionTea.titleThree);
},

seeHerbalTea() {
  I.seeElement(this.passionTea.passionClickableLinks.herbalTeaButton);
},

seeLooseTea() {
  I.seeElement(this.passionTea.passionClickableLinks.looseTeaButton);
},

seeFlavoredTea() {
  I.seeElement(this.passionTea.passionClickableLinks.flavoredTeaButton);
},

clickingHerbalTea() {
  I.click(this.passionTea.passionClickableLinks.herbalTeaButton);
},

clickingLooseTea() {
  I.click(this.passionTea.passionClickableLinks.looseTeaButton);
},

clickingFlavoredTea() {
  I.click(this.passionTea.passionClickableLinks.flavoredTeaButton);
},

ourPassionText() {
  I.see('Our Passion');
},

clickingOurPassion() {
  I.click(this.passionTea.passionClickableLinks.ourPassion);
},

verifyMenuTitleOne() {
  I.seeElement(this.menuPageObjects.menuTitleOne);
},

verifyMenuTitleTwo() {
  I.seeElement(this.menuPageObjects.menuTitleTwo);
},

checkoutButtonOne() {
  I.seeElement(this.menuPageObjects.checkOutCTAOne);
},

checkoutButtonTwo() {
  I.seeElement(this.menuPageObjects.checkoutCTATwo);
},

clickingCheckoutButtonOne() {
  I.click(this.menuPageObjects.checkOutCTAOne);
  I.seeInCurrentUrl('/check-out', 20);
},

enteringEmail(email) {
  I.click(this.billingInformation.emailField);
  I.fillField(this.billingInformation.emailField, email);
},

enteringName(name) {
  I.click(this.billingInformation.nameField);
  I.fillField(this.billingInformation.nameField, name);
},

enteringAddress(address) {
  I.click(this.billingInformation.addressField);
  I.fillField(this.billingInformation.addressField, address);
},

selectingCardType() {
  I.click(this.billingInformation.cardTypeField);
  I.click(this.billingInformation.selectingVisa);
},

enteringCardNumber(number) {
  I.click(this.billingInformation.cardNumberField);
  I.fillField(this.billingInformation.cardNumberField, number);
},

enteringCardHolderName(name) {
  I.click(this.billingInformation.cardHolderNameField);
  I.fillField(this.billingInformation.cardHolderNameField, name);
},

cidNumber(number) {
  I.click(this.billingInformation.verificationCodeField);
  I.fillField(this.billingInformation.verificationCodeField, number);
},

orderButtonClick() {
  I.click(this.billingInformation.placeOrderCTAButton);
},

}
