const currentDatabase = require(`../db/db.json`);

var usedIDs = [];

function buildUsedList() {
    usedIDs = [];
    currentDatabase.forEach((entry) => usedIDs.push(entry.id));
};

function buildStr() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

function returnUnique() {
    buildUsedList();
    let possibility = buildStr();
    while (usedIDs.includes(possibility)) {
        possibility = buildStr();
    };
    return possibility;
}

module.exports = () => {
    buildUsedList();
    let possibility = buildStr();
    while (usedIDs.includes(possibility)) {
        possibility = buildStr();
    };
    return possibility;
};