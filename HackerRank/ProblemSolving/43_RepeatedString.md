# Repeated String
  
  
Lilah has a string, **s**, of lowercase English letters that she repeated infinitely many times.

Given an integer, **n**, find and print the number of letter a's in the first **n** letters of Lilah's infinite string.

For example, if the string **s = 'abcac'** and **n = 10**, the substring we consider is **abcacabcac**, the first **10** characters of her infinite string. There are **4** occurrences of a in the substring.

<br/>

## Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length **n** in the infinitely repeating string.

repeatedString has the following parameter(s):

- s: a string to repeat
- n: the number of characters to consider

<br/>

## Input Format

The first line contains a single string, **s**. 
The second line contains an integer, **n**.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1\leq&space;|s|\leq&space;100)
- [](https://latex.codecogs.com/gif.latex?1\leq&space;n\leq&space;10^{12})
- For **25%** of the test cases, ![](https://latex.codecogs.com/gif.latex?n&space;\leq&space;10^{6}).

<br/>

## Output Format

Print a single integer denoting the number of letter a's in the first **s** letters of the infinite string created by repeating  infinitely many times.

<br/>

## Sample Input 0
```
aba
10
```

<br/>

## Sample Output 0
```
7
```

<br/>

## Explanation 0 

The first **n = 10** letters of the infinite string are abaabaabaa. Because there are **7** a's, we print **7** on a new line.

<br/>

## Sample Input 1
```
a
1000000000000
```

<br/>

## Sample Output 1
```
1000000000000
```

<br/>

## Explanation 1 

Because all of the first `n = 1000000000000` letters of the infinite string are a, we print **1000000000000** on a new line.

<br/>

---

### Solution

```javascript
function repeatedString(s, n) {
    let strings = [...s];
    let multiNum = Math.floor(n / strings.length);
    let restNum = n % strings.length;
    
    let setNum = strings.reduce((target, s, index) => {
        s === 'a' && target['multi']++;
        s === 'a' && index < restNum && target['rest']++;

        return target;
    }, { multi: 0, rest: 0 });

    return multiNum * setNum['multi'] + setNum['rest'];
}
```