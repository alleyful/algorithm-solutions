# Drawing Book

Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book, page **1** is always on the right side:

![](./images/drawingBook-01.png)

When she flips page **1**, she sees pages **2** and **3**. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is **n** pages long, and she wants to turn to page **p**, what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

Given **n** and **p**, find and print the minimum number of pages Brie must turn in order to arrive at page **p**.

<br/>

## Function Description

Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn.

pageCount has the following parameter(s):

- n: the number of pages in the book
- p: the page number to turn to

<br/>

## Input Format

The first line contains an integer **n**, the number of pages in the book. 
The second line contains an integer, **p**, the page that Brie's teacher wants her to turn to.

<br/>

## Constraints
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;n\leq&space;10^{5})
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;p\leq&space;n)

<br/>

## Output Format

Print an integer denoting the minimum number of pages Brie must turn to get to page **p**.

<br/>

## Sample Input 0
```
6
2
```

<br/>

## Sample Output 0
```
1
```

<br/>

## Explanation 0

If Brie starts turning from page **1**, she only needs to turn **1** page:

![](./images/drawingBook-02.png)

If Brie starts turning from page **6**, she needs to turn **2** pages:

![](./images/drawingBook-03.png)

Because we want to print the minumum number of page turns, we print **1** as our answer.

<br/>

## Sample Input 1
```
5
4
```

<br/>

## Sample Output 1
```
0
```

<br/>

## Explanation 1

If Brie starts turning from page **1**, she needs to turn **2** pages:

![](./images/drawingBook-04.png)

If Brie starts turning from page **5**, she doesn't need to turn any pages:

![](./images/drawingBook-05.png)

Because we want to print the minimum number of page turns, we print **0** as our answer.

<br/>

---

### Solution

```javascript
function pageCount(n, p) {
    return n / 2 < p ? Math.floor(n / 2) - Math.floor(p / 2) : Math.floor(p / 2);
}
```