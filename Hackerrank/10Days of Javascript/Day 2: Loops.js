// case1
function vowelsAndConsonants(s) {
    const vowelArray = [...s];
    let result = [];

    const newArray = vowelArray.reduce((target, item) => {
        switch (item) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                target['first'].push(item);
                break;

            default:
                target['second'].push(item);
                break;
        }

        return target;
    }, {first: [], second: []})

    result = [...newArray['first'], ...newArray['second']].map(item => console.log(item))
}


//case2
function vowelsAndConsonants(s) {
    const vowelArray = [...s];
    const result = [];

    const newArray = vowelArray.reduce((target, item) => {
        switch (item) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                target[0].push(item);
                break;

            default:
                target[1].push(item);
                break;
        }
        
        return target;
    }, [[], []])

    newArray.reduce((target, items) => {
        target.push(
            items.reduce((target, item) => {
                result.push(item);

                return target;
            }, [])
        )

        return target;
    }, [])

    result.map(item => console.log(item))
}
