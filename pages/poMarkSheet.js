const { I } = inject();

module.exports = {

    //Page Objects and Locators

markSheetSignUpForm: {
    markSheetHomePage: "https://marksheet.io/html-forms.html",
    exampleTitle: "//*[@id='example-a-complete-signup-form']",
    missRadioButton: "//*[@value='miss']",
    firstNameField: "//p[2]//input[1]",
    lastNameField: "//p[3]//input[1]",
    emailField: "//p[4]//input[1]",
    phoneNumberField: "//p[5]//input[1]",
    passwordField: "//p[6]//input[1]",
    confirmPasswordField: "//p[7]//input[1]",
    agreeTemsCheckbox: "//form//label[1]//input[1]",
    signUpCTA: "//*[contains(text(),'Sign up')]",
    countrySelection: "//div[@class='result']//form//p//select",
    selectUS: "//option[contains(text(),'United States')]",

},


    //Methods
    formFill() {
        I.fillField(this.markSheetSignUpForm.firstNameField, 'John');
        I.fillField(this.markSheetSignUpForm.lastNameField, 'Smith');
        I.fillField(this.markSheetSignUpForm.emailField, 'john.smith@test.com');
        I.fillField(this.markSheetSignUpForm.passwordField, 'password');
        I.fillField(this.markSheetSignUpForm.confirmPasswordField, 'password');
    },

verifySignupPage() {
    I.amOnPage(this.markSheetSignUpForm.markSheetHomePage);
},

seeExampleTitle() {
    I.seeElement(this.markSheetSignUpForm.exampleTitle);
},

clickingMissRadioButton() {
    I.click(this.markSheetSignUpForm.missRadioButton);
},

selectingCountry() {
    //I.click(this.markSheetSignUpForm.selectingCountry);
    I.click(this.markSheetSignUpForm.selectUS);
},

termsAndConditions() {
    I.click(this.markSheetSignUpForm.agreeTemsCheckbox);
},

signUpButton() {
    I.click(this.markSheetSignUpForm.signUpCTA);
},

}