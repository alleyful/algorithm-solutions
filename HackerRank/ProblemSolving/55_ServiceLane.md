# Service Lane
  
Calvin is driving his favorite vehicle on the 101 freeway. He notices that the check engine light of his vehicle is on, and he wants to service it immediately to avoid any risks. Luckily, a service lane runs parallel to the highway. The service lane varies in width along its length.

![](./images/serviceLane.png)

You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

For example, there are **n = 4** measurements yielding **width = [2, 3, 2, 1]**. If our entry index, **i = 1** and our exit, **j = 2**, there are two segment widths of **2** and **3** respectively. The widest vehicle that can fit through both is **2**. If **i = 2** and **j = 4**, our widths are **[3, 2, 1]** which limits vehicle width to **1**.

<br/>

## Function Description

Complete the serviceLane function in the editor below. It should return an array of integers representing the maximum width vehicle that can pass through each segment of the highway described.

serviceLane has the following parameter(s):

- n: an integer denoting the size of the **cases** array
- cases: a two dimensional array of integers where each element is an array of two integers representing starting and ending indices for a segment to consider .

<br/>

## Input Format

The first line of input contains two integers, **n** and **t**, where **n** denotes the number of width measurements you will receive and **t** the number of test cases. The next line has **n** space-separated integers which represent the array ![](https://latex.codecogs.com/gif.latex?width[w_{0},&space;w_{1}&space;...&space;,&space;w_{n-1}]).

The next **t** lines contain two integers, **i** and **j**, where **i** is the start index and **j** is the end index of the segment being considered.

<br/>

## Constraints
- ![](https://latex.codecogs.com/gif.latex?2\leq&space;n\leq&space;100000)
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;t\leq&space;1000)
- ![](https://latex.codecogs.com/gif.latex?0\leq&space;i<&space;j<&space;n)
- ![](https://latex.codecogs.com/gif.latex?2\leq&space;j&space;-&space;i&space;&plus;&space;1\leq&space;min(n,&space;1000))
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;width[k]\leq&space;3,&space;where&space;\,&space;0\leq&space;k<&space;n)

<br/>

## Output Format

For each test case, print the number that represents the largest vehicle type that can pass through the entire segment of the service lane between indexes **i** and **j** inclusive.

<br/>

## Sample Input
```
8 5
2 3 1 2 3 2 3 3
0 3
4 6
6 7
3 5
0 7
```

<br/>

## Sample Output
```
1
2
3
2
1
```

<br/>

## Explanation

Below is the representation of the lane:
```
   |HIGHWAY|Lane|    ->    Width

0: |       |--|            2
1: |       |---|           3
2: |       |-|             1
3: |       |--|            2
4: |       |---|           3
5: |       |--|            2
6: |       |---|           3
7: |       |---|           3
```

1. **(0, 3)**: From index **0** through **3** we have widths **2, 3, 1** and . Nothing wider than **1** can pass all segments.
2. **(4, 6)**: From index **4** through **6** we have width **3, 2** and **3**. Nothing wider than **2** can pass all segments.
3. **(6, 7)**: **3, 3 -> 3** .
4. **(3, 5)**: **2, 3, 2 -> 2**
5. **(0, 7)**: **2, 3, 1, 2, 3, 2, 3, 3 -> 1**.

<br/>

---

### Solution `Accepted`

```javascript
function serviceLane(width, cases) {
  return cases.reduce((target, item) => {
    target.push(Math.min(...width.slice(item[0], item[1] + 1)));
    return target;
  }, []);
}
```