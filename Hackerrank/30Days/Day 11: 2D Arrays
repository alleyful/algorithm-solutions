function main() {
    let arr = Array(6);
    let maxSum;

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const findMaxSum = (n, m) => {
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                sum += !(i === 1 && (j === 0 || j === 2)) && arr[n + i][m + j];
            }
        }
        return sum;
    }

    const search = () => {
        let sum;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                sum = findMaxSum(i, j);
                (i === 0 && j === 0) && (maxSum = sum);
                maxSum < sum && (maxSum = sum);
            }
        }
    }
    
    search();
    console.log(maxSum);

}
