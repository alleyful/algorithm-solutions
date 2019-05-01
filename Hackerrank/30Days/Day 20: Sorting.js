function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here

    let numberOfSwaps = 0;

    const bubbleSort = (array) => {
        let arr = array;
        let length = arr.length;
        let i, j, temp;

        for (i = 0; i < length - 1; i++) {
            for (j = 0; j < length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                    numberOfSwaps++;
                }
            }
        }

        return arr;
    }

    let sortArray = bubbleSort(a);

    console.log(`Array is sorted in ${numberOfSwaps} swaps.`)
    console.log(`First Element: ${sortArray[0]}`)
    console.log(`Last Element: ${sortArray[sortArray.length-1]}`)
}
