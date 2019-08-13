# Sherlock and Squares
  
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints.

**Note**: A square integer is an integer which is the square of an integer, e.g. **1, 4, 9, 16, 25**.

For example, the range is **a = 24** and **b = 49**, inclusive. There are three square integers in the range: **25, 36** and **49**.

<br/>

## Function Description

Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from **a** to **b**.

squares has the following parameter(s):

- a: an integer, the lower range boundary  
- b: an integer, the uppere range boundary  

<br/>

## Input Format

The first line contains **q**, the number of test cases. 
Each of the next **q** lines contains two space-separated integers denoting **a** and **b**, the starting and ending integers in the ranges.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1\leq&space;q\leq&space;100) 
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;a\leq&space;b\leq&space;10^{9}) 
 

<br/>

## Output Format

For each test case, print the number of square integers in the range on a new line.

<br/>

## Sample Input
```
2
3 9
17 24
```

<br/>

## Sample Output
```
2
0
```

<br/>

## Explanation

Test Case #00: In range **[3, 9], 4**, **9** and  are the two square integers. 
Test Case #01: In range **[17, 24]**, there are no square integers.

<br/>

---

### Solution

```javascript
function squares(a, b) {
    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}
```