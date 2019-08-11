# Extra Long Factorials
  
The factorial of the integer **n**, written **n!**, is defined as:

`n! = n x (n - 1) x (n - 2) x ... x 3 x 2 x 1`

Calculate and print the factorial of a given integer.

For example, if **n = 3**, we calculate `30 x 29 x 28 x ... x 3 x 2 x 1` and get **265252859812191058636308480000000**.

<br/>

## Function Description

Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

- n: an integer

**Note**: Factorials of **n > 20** can't be stored even in a **64-bit** long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

We recommend solving this challenge using BigIntegers.

<br/>

## Input Format

Input consists of a single integer **n**

<br/>

## Constraints

![](https://latex.codecogs.com/gif.latex?1\leq&space;n\leq&space;100)

<br/>

## Output Format

Print the factorial of **n**.

<br/>

## Sample Input

```
25
```

<br/>

## Sample Output

```
15511210043330985984000000
```

<br/>

## Explanation

`25! = 25 x 24 x 23 x ... x 3 x 2 x 1`


<br/>

---

### Solution

```javascript
function extraLongFactorials(n) {
    const factorial = number => number < BigInt(2) ? BigInt(1) : number * factorial(number - BigInt(1));
    
    console.log(String(factorial(BigInt(n))));
}
```