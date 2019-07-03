# Staircase

Consider a staircase of size **n = 4**:
```
   #
  ##
 ###
####
```

Observe that its base and height are both equal to **n**, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size **n**.

<br/>

## Function Description

Complete the staircase function in the editor below. It should print a staircase as described above.

staircase has the following parameter(s):

- n: an integer

<br/>

## Input Format

A single integer, **n**, denoting the size of the staircase.

<br/>

## Constraints
![](https://latex.codecogs.com/gif.latex?0<&space;n\leq&space;100)

<br/>

## Output Format

Print a staircase of size  using # symbols and spaces.

**Note**: The last line must have  spaces in it.

<br/>

## Sample Input
```
6 
```

<br/>

## Sample Output
```
     #
    ##
   ###
  ####
 #####
######
```

<br/>

## Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of **n = 6**.

<br/>

---

### Solution

```javascript
function staircase(n) {
    let strings = Array(n).fill('#');

    return strings.reduceRight((target, string, index) => {
        target.push([...strings].join('').replace('#'.repeat(index), ' '.repeat(index)));

        return target
    }, []).join('\n');
}
```