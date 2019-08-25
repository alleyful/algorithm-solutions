# Halloween Sale
  
You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price, **p** dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game you buy during the sale will be sold at **p** dollars, but every subsequent game you buy will be sold at exactly **d** dollars less than the cost of the previous one you bought. This will continue until the cost becomes less than or equal to **m** dollars, after which every game you buy will cost **m** dollars each.

For example, if **p = 20**, **d = 3** and **m = 6**, then the following are the costs of the first **11** games you buy, in order:

`20, 17, 14, 11, 8, 6, 6, 6, 6, 6, 6`

You have **s** dollars in your Mist wallet. How many games can you buy during the Halloween Sale?

<br/>

## Input Format

The first and only line of input contains four space-separated integers **p**, **d**, **m** and **s**.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1\leq&space;m\leq&space;p\leq&space;100)
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;d\leq&space;100)
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;s\leq&space;10^{4})


<br/>

## Output Format

Print a single line containing a single integer denoting the maximum number of games you can buy.

<br/>

## Sample Input 0
```
20 3 6 80
```


<br/>

## Sample Output 0
```
6
```


<br/>

## Explanation 0

We have **p = 20**, **d = 3** and **m = 6**, the same as in the problem statement. We also have **S = 80** dollars. We can buy **6** games since they cost `20 + 17 + 14 + 11 + 8 + 6 = 76` dollars. However, we cannot buy a **7**th game. Thus, the answer is `6`.

<br/>

## Sample Input 1
```
20 3 6 85
```


<br/>

## Sample Output 1
```
7
```


<br/>

## Explanation 1

This is the same as the previous case, except this time we have **s = 85** dollars. This time, we can buy **7** games since they cost `20 + 17 + 14 + 11 + 8 + 6 + 6 = 82` dollars. However, we cannot buy an **8**th game. Thus, the answer is `7`.

<br/>

---

### Solution `Accepted`

```javascript
function howManyGames(p, d, m, s) {
  let restMoney = s;
  let price = p;
  let isDiscount = p - d >= m;
  let results = 0;

  if (restMoney > 0) {
    restMoney -= price;
    restMoney >= 0 && results++;
    isDiscount = price - d >= m;
  }

  while (restMoney > 0) {
    price = isDiscount ? price - d : m;
    restMoney = restMoney - price; 
    restMoney >= 0 && results++;
    isDiscount = price - d >= m;
  }

  return results;
}
```