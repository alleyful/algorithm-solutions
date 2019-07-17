# Divisible Sum Pairs
  

You are given an array of **n** integers, `ar = [ar[0], ar[1], ..., ar[n - 1]`, and a positive integer, **k**. Find and print the number of **(i, j)** pairs where **i < j** and  `ar[i] + ar[j]` is divisible by **k**.

For example, `ar = [1, 2, 3, 4, 5, 6]` and `k = 5`. Our three pairs meeting the criteria are `[1, 4]`, `[2, 3]` and `[4, 6]`.

<br/>

## Function Description

Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

- n: the integer length of array **ar**
- ar: an array of integers
- k: the integer to divide the pair sum by

<br/>

## Input Format

The first line contains **2** space-separated integers, **n** and **k**. 
The second line contains **n** space-separated integers describing the values of **ar[ ar[0], ar[1], ..., ar[n-1]]**.

<br/>

## Constraints
- ![](https://latex.codecogs.com/gif.latex?2\leq&space;n\leq&space;100)
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;k\leq&space;100)
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;a[i]\leq&space;100)

<br/>

## Output Format

Print the number of (i, j) pairs where i < j and a[i] + a[j] is evenly divisible by **k**.

<br/>

## Sample Input
```
6 3
1 3 2 6 1 2
```

<br/>

## Sample Output
```
5
```

<br/>

## Explanation

Here are the **5** valid pairs when **k = 3**:

- (0, 2) -> ar[0] + ar[2] = 1 + 2 = 3
- (0, 5) -> ar[0] + ar[5] = 1 + 2 = 3
- (1, 3) -> ar[1] + ar[3] = 3 + 6 = 9
- (2, 4) -> ar[2] + ar[4] = 2 + 1 = 3
- (4, 5) -> ar[4] + ar[5] = 1 + 2 = 3


<br/>

---

### Solution

```javascript
function divisibleSumPairs(n, k, ar) {
    return ar.reduce((target, numberm, index) => {
        new Array(n - index - 1).fill(0).reduce((innerTarget, fill, innerIndex) => {
            ((ar[index] + ar[innerIndex + index + 1]) % k === 0) && target++;

            return innerTarget;
        }, 0);
        
        return target;
    }, 0);
}
```