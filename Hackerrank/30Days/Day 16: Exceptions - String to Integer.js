function main() {
    const S = readLine();
    let N = Number(S);

    try {
        (!N || Number.isNaN(N)) && function () { 
            throw 'Bad String';
        }();

        console.log(N);
    } catch (e) {
        console.log(e);
    }
  
}
