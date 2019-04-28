function processData(input) {
    let result = input.split("\n").slice(1).map(isPrime);

    function isPrimeMessage(isPrime) {
        return isPrime ? "Prime" : "Not prime";
    }

    function isPrime(input, i) {

        if (input == 1) { 
            return isPrimeMessage(false);
        }
        if (input == 2) {
            return isPrimeMessage(true);
        }
        if (input % 2 == 0) {
            return isPrimeMessage(false);
        } 
        for (i = 3; i <= Math.sqrt(input); i += 2) {
            if (input % i == 0) { 
                return isPrimeMessage(false);
            }
        } 
        return isPrimeMessage(true);
    }
    console.log(result.join("\n"));
}
