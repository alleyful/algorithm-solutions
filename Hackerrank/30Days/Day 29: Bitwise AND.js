function findMax(n, k) {
    var max = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            let value = j & i;
            if (value < k && value > max) {
                max = value;
            }
        }
    }

    return max;
}


function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        console.log(findMax(n, k));
    }
}
