const addOne = (x) => {
    return x + 1;
}

const pipe = (number, ...rest) => {
    let currentNumber = number;
    for (let i = 0; i < rest.length; i++) {
        currentNumber = rest[i](currentNumber);
    }
    console.log(currentNumber);
}

pipe(1, addOne, addOne, addOne, addOne, addOne);