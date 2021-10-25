import * as hf from './helper_functions';
import * as cvf from './card_view_functions';
/**
* Card mutable functions
* @param {String} deleteQuery
* @void
**/
function deleteQuery(deleteQuery) {
    let iHC = document.getElementById('inputHistoryContainer');
    iHC.children.namedItem(deleteQuery).remove();
    cvf.clearView();
}
/**
 * 
 * @param {String} query 
 * @returns {Element}
 */
function generateQueryDelButton(query) {
    let delQueryButton = document.createElement("button");
    delQueryButton.id = query;
    delQueryButton.classList = "dqb0";
    delQueryButton.onclick = function (e) {
        deleteQuery(query);
        e.stopPropagation();
    };
    return delQueryButton;
}
/**
 * 
 * @param {String} aUserQuery 
 * @param {String} userInputChoice 
 * @return {Element}
 */
function generateListitem(aUserQuery, userInputChoice) {
    let listItem = document.createElement("li");
    listItem.id = aUserQuery;
    listItem.textContent = aUserQuery;
    listItem.onclick = function () {
        cvf.processHistoryDisplay(listItem.id, userInputChoice);
    };
    listItem.appendChild(generateQueryDelButton(aUserQuery, userInputChoice))
    return listItem;
}
/**
 * @param {Object} val 
 */
function openModule(val) {
    console.log(val.id)
}
/**
 * @param {Event} e 
 * @param {String} val 
 */
function removeModule(e, val) {
    e.stopPropagation()
    document.getElementById(val.id).remove();
}
/**
 * @param {Array} iHObjects 
 * @void
 */
function createCardsForQueryResults(iHObjects) {
    let dc0 = document.getElementsByClassName("dc0");
    for (let i = 0; i < iHObjects.length; i++) {
        let dp0 = hf.elt("div", { id: i, class: "dp0" });
        let dbr0 = hf.elt("div", { id: i, class: "dbr0" });
        dp0.addEventListener('click', function () { openModule(this) });
        dbr0.addEventListener('click', function (e) { removeModule(e, this) })
        dp0.innerText = iHObjects[i].queryResult;
        dp0.appendChild(dbr0);
        dc0.item(0).appendChild(dp0);
    }
}
export {
    createCardsForQueryResults,
    generateListitem,
    generateQueryDelButton
}