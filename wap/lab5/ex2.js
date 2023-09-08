const getNewArray = function (array) {
    return array.filter(item => item.length >= 5 && item.includes("a"));
};