# A Very Big Sum

Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
  
<br/>

## Function Description
  
Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
  
aVeryBigSum has the following parameter(s):
  
- ar: an array of integers.

<br/>

## Input Format
  
The first line of the input consists of an integer **n**. 
The next line contains **n** space-separated integers contained in the array.
  
<br/>
  
## Output Format
  
Print the integer sum of the elements in the array.

<br/>
  
## Constraints 
- ![](https://latex.codecogs.com/gif.latex?1&space;\leq&space;n\leq&space;10)
- ![](https://latex.codecogs.com/gif.latex?1&space;\leq&space;ar\leq&space;10^{10})

<br/>

## Sample Input
```
5
1000000001 1000000002 1000000003 1000000004 1000000005
```

<br/>

## Output
```
5000000015
```

<br/>

## Note:
  
The range of the 32-bit integer is ![](https://latex.codecogs.com/gif.latex?(-2^{31})&space;to&space;(2^{31}&space;-&space;1)&space;or&space;[-2147483648,&space;2147483647]).
When we add several integer values, the resulting sum might exceed the above range. You might need to use long long int in C/C++ or long data type in Java to store such sums.

<br/>

---

### Solution

```javascript
function aVeryBigSum(ar) {
    return ar.reduce((target, number) => { 
        return target + number;
    }, 0)
}
```