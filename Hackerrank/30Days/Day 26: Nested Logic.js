function processData(input) {
    const data = input.split("\n"); 
    const [actual, expected] = data.map(line => {
        const [day, month, year] = line.split(" ").map(Number); 

        return { day, month, year };
    });

    console.log(calculatePrice(actual, expected));
}

const calculatePrice = (actual, expected) => {

    return actual.year > expected.year ? 10000 : (
        actual.year < expected.year ? 0 : (
            actual.month > expected.month ? (actual.month - expected.month) * 500 : (
                actual.month < expected.month
                    ? 0
                    : (actual.day - expected.day) * 15
            ) 
        )
    )
}
