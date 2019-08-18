# ACM ICPC Team
  
There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list of topics known by each attendee, you must determine the maximum number of topics a 2-person team can know. Also find out how many ways a team can be formed to know that many topics. Lists will be in the form of bit strings, where each string represents an attendee and each position in that string represents a field of knowledge, 1 if its a known field or 0 if not.

For example, given three attendees' data as follows:
```
10101
11110
00010
```

These are all possible teams that can be formed:

Members Subjects
```
(1,2)   [1,2,3,4,5]
(1,3)   [1,3,4,5]
(2,3)   [1,2,3,4]
```

In this case, the first team will know all 5 subjects. They are the only team that can be created knowing that many subjects.

<br/>

## Function Description

Complete the acmTeam function in the editor below. It should return an integer array with two elements: the maximum number of topics any team can know and the number of teams that can be formed that know that maximum number of topics.

acmTeam has the following parameter(s):

- topic: a string of binary digits

<br/>

## Input Format

The first line contains two space-separated integers **n** and **m**, where **n** represents the number of attendees and **m** represents the number of topics.

Each of the next **n** lines contains a binary string of length **n**. If the **i**th line's **j**th character is **1**, then the **i**th person knows the **j**th topic.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?2\leq&space;n\leq&space;500)
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;m\leq&space;500)

<br/>

## Output Format

On the first line, print the maximum number of topics a 2-person team can know. 
On the second line, print the number of ways to form a 2-person team that knows the maximum number of topics.

<br/>

## Sample Input
```
4 5
10101
11100
11010
00101
```

<br/>

## Sample Output
```
5
2
```

<br/>

## Explanation

Calculating topics known for all permutations of 2 attendees we get:

- (1, 2) -> 4
- (1, 3) -> 5
- (1, 4) -> 3
- (2, 3) -> 4
- (2, 4) -> 4
- (3, 4) -> 5


`The 2 teams (1, 3) and (3, 4) know all 5 topics which is maximal.`

<br/>

---

### Solution

```javascript
function acmTeam(topic) {
    const getTopics = (s1, s2) => {
        let s2Array = [...s2];
        return [...s1].reduce((target, item, index) => { 
            item | s2Array[index] && target++;
            return target;
        }, 0);
    };

    const topicLength = topic.length - 1;
    let result = new Array(topic[0].length).fill(0);
    let maxValue = 0;

    topic.reduce((target, item, index) => {
        (index !== topicLength) && target.push(
            new Array(topicLength - index).fill(0).reduce((innerTarget, innerItem, innerIndex) => {
                let value = getTopics(item, topic[topicLength - innerIndex]);
                result[value - 1]++;
                maxValue = value > maxValue ? value : maxValue;
                innerTarget.push(value);
                return innerTarget;
            }, [])
        );
        return target;
    }, []);

    return [maxValue, result[maxValue - 1]];
}
```