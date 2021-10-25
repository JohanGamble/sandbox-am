/* Test functions simulation data coming back from server side after query has be determined */
/**
 * @returns {Array}
 */
function testHistory() {
    let valueHistory = [];
    let n = Math.ceil(Math.random() * 100);
    for (let i = 0; i <= n; i++) {
        let nString = Math.random().toString();
        let dbro = Object.create(null);
        dbro.id = i;
        dbro.queryResult = nString;
        valueHistory.push(dbro);
    }
    return valueHistory;
}
export {
    testHistory
}