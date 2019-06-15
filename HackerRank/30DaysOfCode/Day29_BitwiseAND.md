# Day 29: Bitwise AND
  

## Objective 
Welcome to the last day! Today, we're discussing bitwise operations. Check out the Tutorial tab for learning materials and an instructional video!

## Task 
Given set ![](https://latex.codecogs.com/svg.latex?S=\left&space;\{1,2,3,...,N&space;\right&space;\}). Find two integers,  A and B (where A < B ), from set S such that the value of A & B is the maximum possible and also less than a given integer, K.
In this case, & represents the bitwise AND operator.

## Input Format

The first line contains an integer, T, the number of test cases. 
Each of the T subsequent lines defines a test case as 2 space-separated integers, N and K, respectively.

## Constraints
- ![](https://latex.codecogs.com/svg.latex?1\leq&space;T\leq&space;10^{3})
- ![](https://latex.codecogs.com/svg.latex?2\leq&space;N\leq&space;10^{3})
- ![](https://latex.codecogs.com/svg.latex?2\leq&space;K\leq&space;N)

## Output Format

For each test case, print the maximum possible value of ![](https://latex.codecogs.com/svg.latex?A\&B) on a new line.

### Sample Input
```
3
5 2
8 5
2 2
```

### Sample Output
```
1
4
0
```

## Explanation
![](https://latex.codecogs.com/svg.latex?N&space;=&space;5,&space;K&space;=&space;2&space;S&space;=\left&space;\{&space;1,2,3,4,5&space;\right&space;\})
 
All possible values of  and  are:
1. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;1,&space;B&space;=&space;2;&space;A\&B&space;=&space;0)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;1,&space;B&space;=&space;3;&space;A\&B&space;=&space;1)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;1,&space;B&space;=&space;4;&space;A\&B&space;=&space;0)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;1,&space;B&space;=&space;5;&space;A\&B&space;=&space;1)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;2,&space;B&space;=&space;3;&space;A\&B&space;=&space;2)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;2,&space;B&space;=&space;4;&space;A\&B&space;=&space;0)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;2,&space;B&space;=&space;5;&space;A\&B&space;=&space;0)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;3,&space;B&space;=&space;4;&space;A\&B&space;=&space;0)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;3,&space;B&space;=&space;5;&space;A\&B&space;=&space;1)
2. ![](https://latex.codecogs.com/svg.latex?A&space;=&space;4,&space;B&space;=&space;5;&space;A\&B&space;=&space;4)

The maximum possible value of ![](https://latex.codecogs.com/svg.latex?A\&B) that is also < (K = 2) is 1, so we print 1 on a new line.

---

```javascript
function findMax(n, k) {
    var max = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            let value = j & i;
            if (value < k && value > max) {
                max = value;
            }
        }
    }

    return max;
}


function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        console.log(findMax(n, k));
    }
}
```
