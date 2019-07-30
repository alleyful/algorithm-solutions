# Picking Numbers
  
  
Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to **1**. 

For example, if your array is `a = [1, 1, 2, 2, 4, 4, 5, 5, 5]`, you can create two subarrays meeting the criterion: `[1, 1, 2, 2]` and `[4, 4, 5, 5, 5]`. The maximum length subarray has **5** elements.

<br/>

## Function Description

Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created.

pickingNumbers has the following parameter(s):

- a: an array of integers

<br/>

## Input Format

The first line contains a single integer **n**, the size of the array **a**. 
The second line contains **n** space-separated integers **a[i]**.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?2\leq&space;n\leq&space;100)
- ![](https://latex.codecogs.com/gif.latex?0<&space;a[i]<&space;100)
- The answer will be ![](https://latex.codecogs.com/gif.latex?\geq&space;2).

<br/>

## Output Format

A single integer denoting the maximum number of integers you can choose from the array such that the absolute difference between any two of the chosen integers is ![](https://latex.codecogs.com/gif.latex?\leq&space;1).

<br/>

## Sample Input 0
```
6
4 6 5 3 3 1
```

<br/>

## Sample Output 0
```
3
```

<br/>

## Explanation 0

We choose the following multiset of integers from the array: **{4, 3, 3}**. Each pair in the multiset has an absolute difference ![](https://latex.codecogs.com/gif.latex?\leq&space;1)(i.e., **|4 - 3| = 1** and **|3 - 3| = 0**), so we print the number of chosen integers, **3**, as our answer.

<br/>

## Sample Input 1
```
6
1 2 2 3 1 2
```

<br/>

## Sample Output 1
```
5
```

<br/>

## Explanation 1

We choose the following multiset of integers from the array: **{1, 2, 2, 1, 2}**. Each pair in the multiset has an absolute difference ![](https://latex.codecogs.com/gif.latex?\leq&space;1) (i.e., **|1 - 2| = 1**, **|1 - 1| = 0**, and **|2 - 2| = 0**), so we print the number of chosen integers, **5**, as our answer.

<br/>

---

### Solution

```javascript
function pickingNumbers(a) {
    const sorted = a.sort((a, b) => a - b);
    let checkNumber = sorted[0];
    let group = 0;

    return Math.max(...sorted.reduce((target, number) => { 
        !(Math.abs(number - checkNumber) <= 1) && (checkNumber = number, group++);
            
        target[group] ? target[group]++ : target.push(1);     

        return target;
    }, []));
}
```