# Time Conversion
  
Given a time in `12-hour AM/PM format`, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

<br/>

## Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

- s: a string representing time in  hour format

<br/>

## Input Format

A single string  containing a time in 12-hour clock format (i.e.: **hh:mm:ssAM** or **hh:mm:ssPM**), where ![](https://latex.codecogs.com/gif.latex?01\leq&space;hh\leq&space;12) and ![](https://latex.codecogs.com/gif.latex?00\leq&space;mm,&space;ss\leq&space;59).

<br/>

## Constraints

- All input times are valid

<br/>

## Output Format

Convert and print the given time in 24-hour format, where ![](https://latex.codecogs.com/gif.latex?00\leq&space;hh\leq&space;23).

<br/>

## Sample Input 0

```
07:05:45PM
```

<br/>

## Sample Output 0

```
19:05:45
```

<br/>

---

### Solution

```javascript
function timeConversion(s) {
    let time = s.match(/(\d|\:)/ig);
    let tag = s.match(/(A|P)/ig).join('');

    return time.join('').split(':').map((v, i) => { 
        return i === 0 ? (
            tag.match(/P/i)
                ? Number(v) === 0 ? '00' : (Number(v) % 12) + 12
                : Number(v) % 12 === 0 ? '00' : v
        ) : v
    }).join(':')
}
```