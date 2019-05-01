function processData(input) {
    //Enter your code here
    const inputData = input.split('\n');
    const dataLength = Number(inputData.shift());
    const phoneBook = new Map();
    const queryData = inputData.reduce((target, item, index) => {
        index < dataLength ? phoneBook.set(item.split(' ')[0], item.split(' ')[1]) : target.push(item);

        return target;
    }, []);

    queryData.forEach((val, index) => { 
        console.log(phoneBook.get(val) ? `${val}=${phoneBook.get(val)}` : 'Not found');
    })

} 
