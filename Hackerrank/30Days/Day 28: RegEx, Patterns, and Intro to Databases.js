function main() {
    const N = parseInt(readLine(), 10);
    const patten = new RegExp("@gmail.com");
    const names = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        patten.test(emailID) && names.push(firstName);
    }

    names.sort().forEach(name => console.log(name));
}
