function reverseString(s) {
    let result;
    try{
        result = [...s].reverse().join('')
        console.log(result);
    } catch(e) {
        console.log('s.split is not a function');
        console.log(s);
    }
    
    return result;
}
