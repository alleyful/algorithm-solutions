# Utopian Tree
  
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after **n** growth cycles?

For example, if the number of growth cycles is **n = 5**, the calculations are as follows:
```
Period  Height
0          1
1          2
2          3
3          6
4          7
5          14
```

<br/>

## Function Description

Complete the utopianTree function in the editor below. It should return the integer height of the tree after the input number of growth cycles.

utopianTree has the following parameter(s):

- n: an integer, the number of growth cycles to simulate

<br/>

## Input Format

The first line contains an integer, **t**, the number of test cases. 
**t** subsequent lines each contain an integer, **n**, denoting the number of cycles for that test case.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1\leq&space;t\leq&space;10)
- ![](https://latex.codecogs.com/gif.latex?0\leq&space;n\leq&space;60)
 
<br/>

## Output Format

For each test case, print the height of the Utopian Tree after  cycles. Each height must be printed on a new line.

<br/>

## Sample Input
```
3
0
1
4
```

<br/>

## Sample Output
```
1
2
7
```

<br/>

## Explanation

There are 3 test cases.

In the first case (**n = 0**), the initial height (**H = 1**) of the tree remains unchanged.

In the second case (**n = 1**), the tree doubles in height and is **2** meters tall after the spring cycle.

In the third case (**n = 4**), the tree doubles its height in spring (**n = 1**, **H = 2** ), then grows a meter in summer (**n = 2**, **H = 3**), then doubles after the next spring (**n = 3**, **H = 6**), and grows another meter after summer (**n = 4**, **H = 7**). Thus, at the end of 4 cycles, its height is **7** meters.

<br/>

---

### Solution

```javascript
function utopianTree(n) {
    return new Array(n).fill(0).reduce((target, value, index) => {
        return target = (index % 2 === 0) ? target * 2 : target + 1;
    }, 1);
}
```