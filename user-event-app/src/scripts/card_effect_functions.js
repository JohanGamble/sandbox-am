/**
* Card effect functions
* @param {String} id
* @void
**/
function loadEffectsForEventListeners(id) {
    document.getElementById(id).addEventListener("focus", function () {
        for (let indexedNode = 0; indexedNode < document.getElementsByClassName("dc0").length; indexedNode++) {
            document.getElementsByClassName("dc0")[indexedNode].classList.add("bd");
        }
    });
    document.getElementById(id).addEventListener("blur", function () {
        for (let indexedNode = 0; indexedNode < document.getElementsByClassName("dc0").length; indexedNode++) {
            document.getElementsByClassName("dc0")[indexedNode].classList.remove("bd");
        }
    });
}
export {
    loadEffectsForEventListeners
}
