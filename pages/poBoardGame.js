const { I } = inject();

module.exports = {

//Locators and Page Objects
boardGame: {
    titleField: "//*[@id='advsearch-title']",
    yearPublishedMin: "//*[@id='advsearch-yearpublished-min']",
    yearPublishedMax: "//*[@id='advsearch-yearpublished-max']",
    playingTimeMin: "//select[@id='advsearch-min-playing-time']",
    selectingMinTime: "//select[@id='advsearch-min-playing-time']//option[contains(text(),'15 minutes')]",
    playingTimeMax: "//*[@id='advsearch-max-playing-time']",
    selectingMaxTime: "//select[@id='advsearch-max-playing-time']//option[contains(text(),'1.5 hours')]",
    submitButton: "//input[@name='B1']",
    newLink: "//div[@id='results_objectname1']",
},

//Methods
titleSearch(name) {
    I.fillField(this.boardGame.titleField, name);
},

selectingYearPublishedMin(year) {
    I.fillField(this.boardGame.yearPublishedMin, year);
},

selectingYearPublishedMax(year) {
    I.fillField(this.boardGame.yearPublishedMax, year);
},

selectingMinPlayingTime() {
    I.checkOption(this.boardGame.selectingMinTime);
},

selectingMaxPlayingTime() {
    I.checkOption(this.boardGame.selectingMaxTime);
    },

submitCTA() {
    I.click(this.boardGame.submitButton);
    },

afterSubmit() {
    I.waitForElement(this.boardGame.newLink, 20)
    },

}