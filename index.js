var GLOBAL = window ? window : global;
exports.GLOBAL = GLOBAL;

GLOBAL.sleep = function (timespan) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, timespan)
    })
};