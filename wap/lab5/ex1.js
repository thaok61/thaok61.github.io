function sum (array) {
    let total = 0;
    array.forEach((item) => {
        if (item >= 20 ) {
            total += item;
        }
    })
    return total;
}