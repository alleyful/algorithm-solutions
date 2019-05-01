function printResult(result) {
    result ? console.log('Weird') : console.log('Not Weird');
}

function main() {
    const N = parseInt(readLine(), 10);
    (N % 2) === 0
        ? printResult(N >= 6 && N <= 20)
        : printResult(true);
}
