# Sequence Equation
  
  
Given a sequence of **n** integers, `p(1), p(2), ..., p(n)` where each element is distinct and satisfies ![](https://latex.codecogs.com/gif.latex?1\leq&space;p(x)\leq&space;n). For each **x** where ![](https://latex.codecogs.com/gif.latex?1\leq&space;x\leq&space;n), find any integer **y** such that p(p(y)) ![](https://latex.codecogs.com/gif.latex?\equiv&space;x) and print the value of **y** on a new line.

For example, assume the sequence **p = [5, 2, 1, 3, 4]**. Each value of **x** between **1** and **5**, the length of the sequence, is analyzed as follows:

1. x = 1 ![](https://latex.codecogs.com/gif.latex?\equiv) p[3], p[4] = 3, so p[p[4]] = 1
2. x = 2 ![](https://latex.codecogs.com/gif.latex?\equiv) p[2], p[2] = 2, so p[p[2]] = 2
3. x = 3 ![](https://latex.codecogs.com/gif.latex?\equiv) p[3], p[5] = 4, so p[p[5]] = 3
4. x = 4 ![](https://latex.codecogs.com/gif.latex?\equiv) p[5], p[1] = 5, so p[p[1]] = 4
5. x = 5 ![](https://latex.codecogs.com/gif.latex?\equiv) p[1], p[3] = 1, so p[p[3]] = 5

The values for **y**are **[4, 2, 5, 1, 3]**.

<br/>

## Function Description

Complete the permutationEquation function in the editor below. It should return an array of integers that represent the values of **y**.

permutationEquation has the following parameter(s):

- p: an array of integers

<br/>

## Input Format

The first line contains an integer **n**, the number of elements in the sequence. 
The second line contains **n** space-separated integers **p[i]** where ![](https://latex.codecogs.com/gif.latex?1\leq&space;i\leq&space;n).

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1\leq&space;n\leq&space;50))
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;p[i]\leq&space;50)), where ![](https://latex.codecogs.com/gif.latex?1\leq&space;i\leq&space;n)).
- Each element in the sequence is distinct.

<br/>

## Output Format

For each **x** from **1** to **n**, print an integer denoting any valid **y** satisfying the equation p(p(y)) ![](https://latex.codecogs.com/gif.latex?\equiv&space;x) on a new line.

<br/>

## Sample Input 0
```
3
2 3 1
```


<br/>

## Sample Output 0
```
2
3
1
```


<br/>

## Explanation 0

Given the values of **p(1) = 2**, **p(2) = 3**, and **p(3) = 1**, we calculate and print the following values for each **x** from **1** to **n**:

1. x = 1 ![](https://latex.codecogs.com/gif.latex?\equiv) p(3) = p(p(2)) = p(p(y)), so we print the value of **y = 2** on a new line.
2. x = 2 ![](https://latex.codecogs.com/gif.latex?\equiv) p(1) = p(p(3)) = p(p(y)), so we print the value of **y = 3** on a new line.
3. x = 3 ![](https://latex.codecogs.com/gif.latex?\equiv) p(2) = p(p(1)) = p(p(y)), so we print the value of **y = 1** on a new line.

<br/>

## Sample Input 1
```
5
4 3 5 1 2
```


<br/>

## Sample Output 1
```
1
3
5
4
2
```


<br/>

---

### Solution

```javascript
function permutationEquation(p) {
  const findCurrentIndex = arr => arr.map((v, i) => p.findIndex(innerV => innerV === v) + 1);
  return findCurrentIndex(findCurrentIndex(new Array(p.length).fill(0).map((v, i) => i + 1)));
}
```