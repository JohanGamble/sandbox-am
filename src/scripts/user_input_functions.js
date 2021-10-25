import * as cgf from './card_list_mutable_functions';
import * as hf from './helper_functions';
import * as rfn from './random_fractional_numbers';

let inputHistory = [];
let inputChoice = [];

/**
 * @param {String} id
 **/
function inputId(id) {
    document.getElementById(id).addEventListener("keyup", function (val) { incomingInput(val) });
    document.getElementById(id).addEventListener("keydown", function (e) { confirmedInput(e) });
}
/**
 * @param {Event} val 
 */
function incomingInput(val) {
    if (val.target.value) {
        encodeURI(val.key)
        // CORRECTION --- Every form of input is not needed.
        inputHistory.push(val.target.value);
    }
}
/**
 * @param {Event} e
 * @void
 */
function confirmedInput(e) {
    let keyboard = e.key || e.keyCode;
    let aConfirmedInput = inputHistory[inputHistory.length - 1];
    if (keyboard === "Enter" || keyboard === 13) {
        if (!hf.isNullOrWhitespace(aConfirmedInput)) {
            let history = rfn.testHistory();
            inputChoice.push({ [aConfirmedInput]: history });
            processInput(aConfirmedInput, history);
        }
    }
}
/**
 * @param {String} aConfirmedInput 
 * @param {Array} iHValues 
 */
function processInput(aConfirmedInput, iHValues) {
    let inputHC = document.getElementById("inputHistoryContainer");
    inputHC.appendChild(cgf.generateListitem(aConfirmedInput, inputChoice));
    cgf.createCardsForQueryResults(iHValues);
}
export {
    inputId
}