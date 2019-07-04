# Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, `arr = [ 1, 3, 5, 7, 9 ]`. Our minimum sum is `1 + 3 + 5 + 7 = 16` and our maximum sum is `3 + 5 + 7 + 9 = 24`. 
We would print
```
16 24
```

<br/>

## Function Description

Complete the miniMaxSum function in the editor below. 
It should print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

- arr: an array of  integers

<br/>

## Input Format

A single line of five space-separated integers.

<br/>

## Constraints

![](https://latex.codecogs.com/gif.latex?1\leq&space;arr[i]\leq&space;10^{9})

<br/>

## Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

<br/>

## Sample Input
```
1 2 3 4 5
```

<br/>

## Sample Output
```
10 14
```

<br/>

## Explanation

Our initial numbers are `1, 2, 3, 4, and 5`. 
We can calculate the following sums using four of the five integers:

If we sum everything except `1`, our sum is `2 + 3 + 4 + 5 = 14`.
If we sum everything except `2`, our sum is `1 + 3 + 4 + 5 = 13`.
If we sum everything except `3`, our sum is `1 + 2 + 4 + 5 = 12`.
If we sum everything except `4`, our sum is `1 + 2 + 3 + 5 = 11`.
If we sum everything except `5`, our sum is `1 + 2 + 3 + 4 = 10`.

**Hints**: Beware of integer overflow! Use 64-bit Integer.

<br/>

---

### Solution

```javascript
function miniMaxSum(arr) {
    let length = arr.length - 1;
    return arr.sort((a, b) => a > b).reduce((target, item, index) => {
        !(index === length) && (target[0] += item);
        !(index === 0) && (target[1] += item);

        return target
    }, [0, 0]).join(' ');
}
```