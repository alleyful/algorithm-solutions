# Circular Array Rotation
  
  
John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the value of the element at a given index.

For example, array `a = [3, 4, 5]`, number of rotations, `k = 2` and indices to check, `m = [1, 2]`. 
First we perform the two rotations: 
`[3, 4, 5] -> [5, 3, 4] -> [4, 5, 3]`  
Now return the values from the zero-based indices **1** and **2** as indicated in the **m** array. 
**a[1] = 5**
**a[2] = 3**

<br/>

## Function Description

Complete the circularArrayRotation function in the editor below. It should return an array of integers representing the values at the specified indices.

circularArrayRotation has the following parameter(s):

- a: an array of integers to rotate
- k: an integer, the rotation count
- queries: an array of integers, the indices to report

<br/>

## Input Format

The first line contains **3** space-separated integers, **n**, **k**, and **q**, the number of elements in the integer array, the rotation count and the number of queries.  
The second line contains **n** space-separated integers, where each integer **k** describes array element **a[i]** (where ![](https://latex.codecogs.com/gif.latex?0\leq&space;i<&space;n)).  
Each of the **q** subsequent lines contains a single integer denoting **m**, the index of the element to return from **a**.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1\leq&space;n\leq&space;10^{5})
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;a[i]\leq&space;10^{5})
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;k\leq&space;10^{5})
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;q\leq&space;500})
- ![](https://latex.codecogs.com/gif.latex?0\leq&space;m<&space;n)

<br/>

## Output Format

For each query, print the value of the element at index **m** of the rotated array on a new line.

<br/>

## Sample Input 0
```
3 2 3
1 2 3
0
1
2
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

After the first rotation, the array becomes `[3, 1, 2]`. 
After the second (and final) rotation, the array becomes `[2, 3, 1]`.

Let's refer to the array's final state as array `b = [2, 3, 1]`. For each query, we just have to print the value of ![](https://latex.codecogs.com/gif.latex?b_{m}) on a new line:

1. ![](https://latex.codecogs.com/gif.latex?m=0,&space;b_{0}=2.)
2. ![](https://latex.codecogs.com/gif.latex?m=1,&space;b_{1}=3.)
3. ![](https://latex.codecogs.com/gif.latex?m=2,&space;b_{2}=1.)

<br/>

---

### Solution

```javascript
function circularArrayRotation(a, k, queries) {
    const results = a.reduce((target, number, index) => {
        let currentIndex = (index + k) % a.length;
        target[currentIndex] = number;

        return target;
    }, []);

    return queries.map(v => results[v]);
}
```