# Bon Appétit
  
  
Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: `bill = [2, 4, 6]`. Anna declines to eat item `k = bill[2]` which costs **6**. If Brian calculates the bill correctly, Anna will pay **(2 + 4) / 2 = 3**. If he includes the cost of **bill[2]**, he will calculate **(2 + 4 + 6) / 2 = 6**. In the second case, he should refund **3** to Anna.

<br/>

## Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

- bill: an array of integers representing the cost of each item ordered
- k: an integer representing the zero-based index of the item Anna doesn't eat
- b: the amount of money that Anna contributed to the bill

<br/>

## Input Format

The first line contains two space-separated integers **n** and **k**, the number of items ordered and the **0**-based index of the item that Anna did not eat.  
The second line contains **n** space-separated integers **bill[i]** where ![](https://latex.codecogs.com/gif.latex?0\leq&space;i<&space;n). 
The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill.

<br/>

## Constraints
- ![](https://latex.codecogs.com/gif.latex?2\leq&space;n\leq&space;10^{5})
- ![](https://latex.codecogs.com/gif.latex?0\leq&space;k<&space;n)
- ![](https://latex.codecogs.com/gif.latex?0\leq&space;bill[i]]\leq&space;10^{4})
- ![](https://latex.codecogs.com/gif.latex?0\leq&space;b\leq&space;\sum_{i=0}^{n-1}bill[i])
- The amount of money due Anna will always be an integer

<br/>

## Output Format

If Brian did not overcharge Anna, print `Bon Appetit` on a new line; otherwise, print the difference (i.e., ![](https://latex.codecogs.com/gif.latex?b_{charged}&space;-&space;b_{actual})) that Brian must refund to Anna. This will always be an integer.

<br/>

## Sample Input 0
```
4 1
3 10 2 9
12
```

<br/>

## Sample Output 0
```
5
```

<br/>

## Explanation 0 

Anna didn't eat item **bill[1] = 10**, but she shared the rest of the items with Brian. The total cost of the shared items is **3 + 2 + 9 = 14** and, split in half, the cost per person is ![](https://latex.codecogs.com/gif.latex?b_{actual}&space;=&space;7). Brian charged her ![](https://latex.codecogs.com/gif.latex?b_{charged}&space;=&space;12) for her portion of the bill. We print the amount Anna was overcharged, ![](https://latex.codecogs.com/gif.latex?b_{charged}&space;-&space;b_{actual}&space;=&space;12&space;-&space;7&space;=5), on a new line.

<br/>

## Sample Input 1
```
4 1
3 10 2 9
7
```

<br/>

## Sample Output 1
```
Bon Appetit
```

<br/>

## Explanation 1 

Anna didn't eat item **bill[1] = 10**, but she shared the rest of the items with Brian. The total cost of the shared items is **3 + 2 + 9 = 14** and, split in half, the cost per person is ![](https://latex.codecogs.com/gif.latex?b_{actual}&space;=&space;7). Because ![](https://latex.codecogs.com/gif.latex?b_{charged}&space;=&space;b_{actual}&space;=7), we print `Bon Appetit` on a new line.

<br/>

---

### Solution

```javascript
function bonAppetit(bill, k, b) {
    let result = bill.reduce((target, cost, index) => { 
        index !== k && (target += cost);

        return target;
    }, 0) / 2;

    //console.log(result === b ? 'Bon Appetit' : b - result);
    return result === b ? 'Bon Appetit' : b - result
}
```