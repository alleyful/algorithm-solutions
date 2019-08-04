# Viral Advertising
  
  

HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly **5** people on social media.

On the first day, half of those **5** people (i.e., ![](https://latex.codecogs.com/gif.latex?floor(\frac{5}{2})&space;=&space;2)) like the advertisement and each shares it with **3** of their friends. At the beginning of the second day, ![](https://latex.codecogs.com/gif.latex?floor(\frac{5}{2})\times&space;3&space;=&space;2\times&space;3=6) people receive the advertisement.

Each day, ![](https://latex.codecogs.com/gif.latex?floor(\frac{recipients}{2})) of the recipients like the advertisement and will share it with **3** friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day **1**.

For example, assume you want to know how many have liked the ad by the end of the ![](https://latex.codecogs.com/gif.latex?5^{th}) day.

```
Day Shared Liked Cumulative
1      5     2       2
2      6     3       5
3      9     4       9
4     12     6      15
5     18     9      24
```

The cumulative number of likes is **24**.

<br/>

## Function Description

Complete the viralAdvertising function in the editor below. It should return the cumulative number of people who have liked the ad at a given time.

viralAdvertising has the following parameter(s):

- n: the integer number of days

<br/>

## Input Format

A single integer, **n**, denoting a number of days.

<br/>

## Constraints


<br/>

## Output Format

Print the number of people who liked the advertisement during the first **n** days.

<br/>

## Sample Input
```
3
```

<br/>

## Sample Output
```
9
```

<br/>

## Explanation

This example is depicted in the following diagram:

![](./images/viralAdvertising.png)

**2** people liked the advertisement on the first day, **3** people liked the advertisement on the second day and **4** people liked the advertisement on the third day, so the answer is `2 + 3 + 4 = 9`.

<br/>

---

### Solution

```javascript
function viralAdvertising(n) {
    return new Array(n).fill(Math.floor(5 / 2)).reduce((target, day, index) => {
        let number = index === 0 ? day : Math.floor(target['prev'] * 3 / 2);
        target['prev'] = number;
        target['Cumulative'] += number;

        return target;
    }, {Cumulative: 0, prev: 0})['Cumulative'];
}
```