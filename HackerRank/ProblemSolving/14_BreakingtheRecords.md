# Breaking the Records
  
  
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array `scores = [12, 24, 10, 24]`. Scores are in the same order as the games played. She would tabulate her results as follows:

                                 Count
| Game | Score | Minimum | Maximum | Min | Max |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 12 | 12 | 12 | 0 | 0 |
| 1 | 24 | 12 | 24 | 0 | 1 |
| 2 | 10 | 10 | 24 | 1 | 1 |
| 3 | 24 | 10 | 24 | 1 | 1 |

Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.

<br/>

## Function Description

Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index **0** is for breaking most points records, and index **1** is for breaking least points records.

breakingRecords has the following parameter(s):

- scores: an array of integers

<br/>

## Input Format

The first line contains an integer **n**, the number of games. 
The second line contains **n** space-separated integers describing the respective values of ![](https://latex.codecogs.com/gif.latex?score_{0},&space;score_{1},&space;...,&space;score_{n-1}).

<br/>

## Constraints
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;n\leq&space;1000)
- ![](https://latex.codecogs.com/gif.latex?0\leq&space;scores[i]\leq&space;10^{8})


<br/>

## Output Format

Print two space-seperated integers describing the respective numbers of times her best (highest) score increased and her worst (lowest) score decreased.

<br/>

## Sample Input 0
```
9
10 5 20 20 4 5 2 25 1
```

<br/>

## Sample Output 0
```
2 4
```

<br/>

## Explanation 0

The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

![](./images/breakingTheRecords_01.png)

She broke her best record twice (after games **2** and **7**) and her worst record four times (after games **1**, **4**, **6**, and **8**), so we print 2 4 as our answer. Note that she did not break her record for best score during game **3**, as her score during that game was not strictly greater than her best record at the time.

<br/>

## Sample Input 1
```
10
3 4 21 36 10 28 35 5 24 42
```

<br/>

## Sample Output 1
```
4 0
```

<br/>

## Explanation 1

The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

![](./images/breakingTheRecords_02.png)

She broke her best record four times (after games **1**, **2**, **3**, and **9**) and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we print 4 0 as our answer.

<br/>

---

### Solution

```javascript
function breakingRecords(scores) {
    let minValue = scores[0];
    let maxValue = scores[0];

    return scores.reduce((target, score) => {
        score > maxValue
            ? (target[0]++, maxValue = score)
            : (score < minValue && (target[1]++ , minValue = score)); 
            
        return target;
    }, [0, 0])
}
```