# Jumping on the Clouds
  
Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus **1** or **2**. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered **0** if they are safe or **1** if they must be avoided. For example, `c = [0, 1, 0, 0, 0, 1, 0]` indexed from **0 ... 6**. The number on each cloud is its index in the list so she must avoid the clouds at indexes **1** and **5**. She could follow the following two paths: `0 -> 2 -> 4 -> 6` or `0 -> 2 -> 3 -> 4 -> 6`. The first path takes **3** jumps while the second takes **4**.

<br/>

## Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

- c: an array of binary integers

<br/>

## Input Format

The first line contains an integer **n**, the total number of clouds. The second line contains **n** space-separated binary integers describing clouds **c[i]** where ![](https://latex.codecogs.com/gif.latex?0\leq&space;i&space;<&space;n).

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?2\leq&space;n\leq&space;100)
- ![](https://latex.codecogs.com/gif.latex?c[i]\in&space;\left&space;\{&space;0,&space;1&space;\right&space;\})
- ![](https://latex.codecogs.com/gif.latex?c[0]&space;=&space;c[n&space;-&space;1]&space;=&space;0)

<br/>

## Output Format

Print the minimum number of jumps needed to win the game.

<br/>

## Sample Input 0
```
7
0 0 1 0 0 1 0
```

<br/>

## Sample Output 0
```
4
```

<br/>

## Explanation 0: 
Emma must avoid **c[2]** and **c[5]**. She can win the game with a minimum of **4** jumps:

![](./images/jumping-cloud-01.png)

<br/>

## Sample Input 1
```
6
0 0 0 0 1 0
```

<br/>

## Sample Output 1
```
3
```

<br/>

## Explanation 1: 
The only thundercloud to avoid is **c[4]**. Emma can win the game in **3** jumps:

![](./images/jumping-cloud-02.png)

<br/>

---

### Solution

```javascript
function jumpingOnClouds(c) {
    let prevItem = -1;
    let isSecond = false;

    return c.reduce((target, item) => {
        target = item === 0
            ? (prevItem === 0
                ? (isSecond ? (isSecond = false, target) : (isSecond = true, target + 1))
                : target)
            : (prevItem === 0
                ? (isSecond = false, target + 1)
                : target);
        
        prevItem = item;
        return target;
    }, 0)
}
```