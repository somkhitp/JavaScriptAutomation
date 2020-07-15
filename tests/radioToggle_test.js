Feature('Challenge: Radio Toggle');

Before((I) => {
    I.amOnPage('https://gluons.github.io/vue-radio-toggle-buttons/')
});

Scenario('Radio Toggle Functionality @radio', (I, poRadioToggle) => {
    poRadioToggle.verifyHeaderOne(),
    poRadioToggle.verifyDemo(),
    poRadioToggle.verifySelectedItem(),
    poRadioToggle.verifyValueFour(),
    poRadioToggle.verifyValueFive(),
    poRadioToggle.verifyValueOne(),
    poRadioToggle.verifyValueTwo()
});