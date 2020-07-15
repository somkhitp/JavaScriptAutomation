Feature('Challenge, Sign-Up Form');

Before((I) => {});

Scenario('Signup Form @mark', (I, poMarkSheet) => {
    poMarkSheet.verifySignupPage();
    poMarkSheet.seeExampleTitle();
    poMarkSheet.clickingMissRadioButton();
    poMarkSheet.formFill();
    poMarkSheet.selectingCountry();
    poMarkSheet.termsAndConditions();
    poMarkSheet.signUpButton();
    I.seeInCurrentUrl('/signup');
});