# Simple Array Sum

Given an array of integers, find the sum of its elements.

For example, if the array ![](https://latex.codecogs.com/gif.latex?\mathit{a}\mathit{r}=\left&space;[&space;1,&space;2,&space;3&space;\right&space;],&space;1&space;&plus;&space;2&space;&plus;&space;3&space;=&space;6), so return 6.

<br/>

## Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

- ar: an array of integers

<br/>

## Input Format

The first line contains an integer, , denoting the size of the array. 
The second line contains  space-separated integers representing the array's elements.

<br/>

## Constraints

![](https://latex.codecogs.com/gif.latex?0<&space;\mathit{n,ar[i]}\leq&space;1000)

<br/>

## Output Format

Print the sum of the array's elements as a single integer.

<br/>

## Sample Input
```
6
1 2 3 4 10 11
```

<br/>

## Sample Output
```
31
```

<br/>

## Explanation

We print the sum of the array's elements: 1 + 2 + 3 + 4 + 10 + 11 = 31.

---

### Solution

```javascript
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    return ar.reduce((target, number) => {
        return target + number;
    }, 0)
}
```