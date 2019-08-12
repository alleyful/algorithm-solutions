# Append and Delete
  

You have a string of lowercase English alphabetic letters. You can perform two types of operations on the string:

1. Append a lowercase English alphabetic letter to the end of the string.  
2. Delete the last character in the string. Performing this operation on an empty string results in an empty string.  

Given an integer, **k**, and two strings, **s** and **t**, determine whether or not you can convert **s** to **t** by performing exactly **k** of the above operations on **s**. If it's possible, print `Yes`. Otherwise, print `No`.

For example, strings `s = [a, b, c]` and `t = [d, e, f]`. Our number of moves, **k = 6**. To convert **s** to **t**, we first delete all of the characters in **3** moves. Next we add each of the characters of **t** in order. On the ![](https://latex.codecogs.com/gif.latex?6^{th}) move, you will have the matching string. If there had been more moves available, they could have been eliminated by performing multiple deletions on an empty string. If there were fewer than **6** moves, we would not have succeeded in creating the new string.

<br/>

## Function Description

Complete the appendAndDelete function in the editor below. It should return a string, either Yes or No.

appendAndDelete has the following parameter(s):

- s: the initial string
- t: the desired string
- k: an integer that represents the number of operations

<br/>

## Input Format

The first line contains a string **s**, the initial string. 
The second line contains a string **t**, the desired final string. 
The third line contains an integer **k**, the number of operations.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1\leq&space;|s|\leq&space;100)  
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;|t|\leq&space;100)  
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;k\leq&space;100)  
- **s** and **t** consist of lowercase English alphabetic letters, **ascii[a-z]**.

<br/>

## Output Format

Print Yes if you can obtain string **t** by performing exactly **k** operations on **s**. Otherwise, print `No`.

<br/>

## Sample Input 0
```
hackerhappy
hackerrank
9
```

<br/>

## Sample Output 0
```
Yes
```

<br/>

## Explanation 0

We perform **5** delete operations to reduce string **s** to hacker. Next, we perform **4** append operations (i.e., r, a, n, and k), to get hackerrank. Because we were able to convert **s** to **t** by performing exactly **k = 9** operations, we print `Yes`.

<br/>

## Sample Input 1
```
aba
aba
7
```

<br/>

## Sample Output 1
```
Yes
```

<br/>

## Explanation 1

We perform **4** delete operations to reduce string **s** to the empty string (recall that, though the string will be empty after **3**deletions, we can still perform a delete operation on an empty string to get the empty string). Next, we perform **3** append operations (i.e., a, b, and a). Because we were able to convert **s** to **t** by performing exactly **k = 7** operations, we print `Yes`.

<br/>

## Sample Input 2
```
ashley
ash
2
```

<br/>

## Sample Output 2
```
No
```

<br/>

## Explanation 2

To convert ashley to ash a minimum of **#** steps are needed. Hence we print `No` as answer.

<br/>

---

### Solution

```javascript
function appendAndDelete(s, t, k) {
    let sArray = [...s];
    let tArray = [...t];
    let isContinue = true;

    let sameString = tArray.reduce((target, string, index) => {
        (isContinue && string === sArray[index]) 
        ? target.push(string) 
        : (isContinue = false);

        return target;
    }, []);

    let result = (sArray.length + tArray.length) - 2 * sameString.length;

    return result + 1 === k
        ? 'Yes'
        : (result <= k ? 'Yes' : 'No');
}
```