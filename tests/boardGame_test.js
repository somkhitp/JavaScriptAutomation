Feature('Challenge: Board Game');

Before((I) => {
    I.amOnPage('https://boardgamegeek.com/advsearch/boardgame')
});

Scenario('Starting Trivia Game @board', (I, poBoardGame) => {
    poBoardGame.titleSearch("Harry Potter and the Sorcerer's Stone Trivia Game"),
    poBoardGame.selectingYearPublishedMin(1999),
    poBoardGame.selectingYearPublishedMax(2000),
    poBoardGame.selectingMinPlayingTime(),
    poBoardGame.selectingMaxPlayingTime(),
    poBoardGame.submitCTA(),
    poBoardGame.afterSubmit()
});