# Plus Minus

Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

**Note**: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to ![](https://latex.codecogs.com/gif.latex?10^{-4}) are acceptable.

For example, given the array **arr = [1, 1, 0, -1, -1]** there are **5** elements, two positive, two negative and one zero. Their ratios would be ![](https://latex.codecogs.com/gif.latex?\frac{2}{5}=0.400000), ![](https://latex.codecogs.com/gif.latex?\frac{2}{5}=0.400000) and ![](https://latex.codecogs.com/gif.latex?\frac{1}{5}=0.200000). It should be printed as
```
0.400000
0.400000
0.200000
```

<br/>

## Function Description

Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

plusMinus has the following parameter(s):

- arr: an array of integers

<br/>

## Input Format

The first line contains an integer, **n**, denoting the size of the array. 
The second line contains **n** space-separated integers describing an array of numbers **arr=(arr[0], arr[1], arr[2], ..., a[n-1])**.

<br/>

## Constraints
- ![](https://latex.codecogs.com/gif.latex?0<&space;n\leq&space;100)
- ![](https://latex.codecogs.com/gif.latex?-100\leq&space;arr[i]\leq&space;100)
 
<br/>

## Output Format

You must print the following **3** lines:

1. A decimal representing of the fraction of positive numbers in the array compared to its size.
2. A decimal representing of the fraction of negative numbers in the array compared to its size.
3. A decimal representing of the fraction of zeros in the array compared to its size.

<br/>

## Sample Input
```
6
-4 3 -9 0 4 1 
```

<br/>
       
## Sample Output
```
0.500000
0.333333
0.166667
```

<br/>

## Explanation

There are **3** positive numbers, **2** negative numbers, and **1** zero in the array. 
The proportions of occurrence are positive: ![](https://latex.codecogs.com/gif.latex?\frac{3}{6}=0.500000), negative: ![](https://latex.codecogs.com/gif.latex?\frac{2}{6}=0.333333) and zeros: ![](https://latex.codecogs.com/gif.latex?\frac{1}{6}=0.166667).

<br/>

---

### Solution

```javascript
function diagonalDifference(arr) {
    // Write your code here
    return Math.abs(arr.reduce((target, item, index) => {
        let length = item.length - 1;
        return target + item[index] - item[length - index]
    }, 0));
}

```