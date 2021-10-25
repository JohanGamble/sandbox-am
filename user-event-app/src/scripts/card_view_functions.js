import * as cgf from './card_list_mutable_functions';
function clearView() {
    let removeCards = document.getElementsByClassName("dc0");
    if (removeCards.item(0)) {
        let dc0 = document.createElement("div");
        dc0.className = "dc0";
        removeCards.item(0).replaceWith(dc0);
    }
}
/**
 * 
 * @param {String} query 
 * @param {Array} userInput 
 */
function queryinputHistoryContainer(query, userInput) {
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i][query]) {
            cgf.createCardsForQueryResults(userInput[i][query]);
        }
    }
}
/**
 * 
 * @param {String} query 
 * @param {Array} userInput 
 */
function processHistoryDisplay(query, userInput) {
    clearView();
    queryinputHistoryContainer(query, userInput)
}
export {
    clearView,
    processHistoryDisplay
}