# Forming a Magic Square
  
  
We define a magic square to be an `n x m` matrix of distinct positive integers from **1** to **![](https://latex.codecogs.com/gif.latex?n^{2})** where the sum of any row, column, or diagonal of length **n** is always equal to the same number: the magic constant.

You will be given a `3 x 3` matrix  of integers in the inclusive range **[1, 9]**. We can convert any digit **a** to any other digit **b** in the range **[1, 9]** at cost of **|a - b|**. Given **s**, convert it into a magic square at minimal cost. Print this cost on a new line.

**Note**: The resulting magic square must contain distinct integers in the inclusive range **[1, 9]**.

For example, we start with the following matrix **s**:
```
5 3 4
1 5 8
6 4 2
```

We can convert it to the following magic square:
```
8 3 4
1 5 9
6 7 2
```

This took three replacements at a cost of **|5 - 8| + |8 - 9| + |4 - 7| = 7**.

<br/>

## Function Description

Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.

formingMagicSquare has the following parameter(s):

- s: a **3 x 3** array of integers

<br/>

## Input Format

Each of the lines contains three space-separated integers of row **s[i]**.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?s[i][j]\in&space;[1,&space;9])

<br/>

## Output Format

Print an integer denoting the minimum cost of turning matrix **s** into a magic square.

<br/>

## Sample Input 0
```
4 9 2
3 5 7
8 1 5
```

<br/>

## Sample Output 0
```
1
```

<br/>

## Explanation 0

If we change the bottom right value, **s[2][2]**, from **5** to **6** at a cost of **|6 - 5| = 1**, **s** becomes a magic square at the minimum possible cost.

<br/>

## Sample Input 1
```
4 8 2
4 5 7
6 1 6
```

<br/>

## Sample Output 1
```
4
```

<br/>

## Explanation 1

Using 0-based indexing, if we make

- **s[0][1]** -> **9** at a cost of `|9 - 8| = 1`
- **s[1][0]** -> **3** at a cost of `|3 - 4| = 1`
- **s[2][0]** -> **8** at a cost of `|8 - 6| = 2`  

then the total cost will be `1 + 1 + 2 = 4`.

<br/>

---

### Solution

```javascript
function formingMagicSquare(s) {
    const magicSquare = [
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [8, 3, 4, 1, 5, 9, 6, 7, 2]    
    ];

    const inputData = s.reduce((target, array) => { 
        target.push(...array);
        return target;
    }, []);

    return Math.min(...magicSquare.reduce((target, ms) => { 
        target.push(ms.reduce((innerTarget, number, innerIndex) => { 
            innerTarget += Math.abs(inputData[innerIndex] - number);

            return innerTarget;
        }, 0));

        return target;
    }, []));
}
```