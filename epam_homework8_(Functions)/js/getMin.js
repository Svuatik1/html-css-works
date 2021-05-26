const getMin = (...rest) => {
    return Math.min(...rest);
}

console.log(getMin(3, 0, -3, 5, 100, -1, 0, -99));