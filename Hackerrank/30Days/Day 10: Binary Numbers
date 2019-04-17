function main() {
    const n = parseInt(readLine(), 10);
    let result = 0;

    const temp = n.toString(2).split('').reduce((target, num) => {
        
        let value = Number(num) > 0 ? Number(target) + Number(num) : (
            result = target > result ? target : result,
            0
        )
       
        return value;
        
    }, 0)

    console.log(result - temp > 0 ? result : temp)
}
