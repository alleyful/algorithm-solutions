# Day of the Programmer
  
  
Marie invented a [Time Machine](https://en.wikipedia.org/wiki/Time_travel) and wants to test it by time-traveling to visit Russia on the [Day of the Programmer](https://en.wikipedia.org/wiki/Day_of_the_Programmer) (the ![](https://latex.codecogs.com/gif.latex?256^{th})day of the year) during a year in the inclusive range from **1700** to **2700**.

From **1700** to **1917**, Russia's official calendar was the [Julian calendar](https://en.wikipedia.org/wiki/Julian_calendar); since **1919** they used the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) system. The transition from the Julian to Gregorian calendar system occurred in **1918**, when the next day after January ![](https://latex.codecogs.com/gif.latex?31^{st}) was February ![](https://latex.codecogs.com/gif.latex?14^{th}). This means that in **1918**, February ![](https://latex.codecogs.com/gif.latex?14^{th}) was the ![](https://latex.codecogs.com/gif.latex?32^{nd}) day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has **29** days during a leap year, and **28**days during all other years. In the Julian calendar, leap years are divisible by **4**; in the Gregorian calendar, leap years are either of the following:

- Divisible by **400**.  
- Divisible by **4** and not divisible by **100**.  
Given a year, **y**, find the date of the ![](https://latex.codecogs.com/gif.latex?256^{th}) day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is **y**.

For example, the given **year = 1984**. **1984** is divisible by **4**, so it is a leap year. The ![](https://latex.codecogs.com/gif.latex?256^{th}) day of a leap year after **1981** is September 12, so the answer is `12.09.1984`.

<br/>

## Function Description

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the ![](https://latex.codecogs.com/gif.latex?256^{th}) day of the year given.

dayOfProgrammer has the following parameter(s):

- year: an integer

<br/>

## Input Format

A single integer denoting year **y**.

<br/>

## Constraints

- ![](https://latex.codecogs.com/gif.latex?1700\leq&space;y\leq&space;2700)

<br/>

## Output Format

Print the full date of Day of the Programmer during year **y** in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is **y**.

<br/>

## Sample Input 0
```
2017
```

<br/>

## Sample Output 0
```
13.09.2017
```

<br/>

## Explanation 0

In the year `y = 2017`, January has **31** days, February has **28** days, March has **31** days, April has **30** days, May has **31** days, June has **30** days, July has **31** days, and August has **31** days. When we sum the total number of days in the first eight months, we get `31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243`. Day of the Programmer is the ![](https://latex.codecogs.com/gif.latex?256^{th}) day, so then calculate `256 - 243 = 13` to determine that it falls on day **13** of the ![](https://latex.codecogs.com/gif.latex?9^{th}) month (September). We then print the full date in the specified format, which is `13.09.2017`.

<br/>

## Sample Input 1
```
2016
```

<br/>

## Sample Output 1
```
12.09.2016
```

<br/>

## Explanation 1

Year `y = 2016` is a leap year, so February has **29** days but all the other months have the same number of days as in **2017**. When we sum the total number of days in the first eight months, we get `31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244`. Day of the Programmer is the ![](https://latex.codecogs.com/gif.latex?256^{th}) day, so then calculate `256 - 244 = 12` to determine that it falls on day 12 of the ![](https://latex.codecogs.com/gif.latex?9^{th}) month (September). We then print the full date in the specified format, which is `12.09.2016`.

<br/>

## Sample Input 2
```
1800
```

<br/>

## Sample Output 2
```
12.09.1800
```

<br/>

## Explanation 2

`Since 1800 is leap year. Day lies on 12 September.`


<br/>

---

### Solution

```javascript
function dayOfProgrammer(year) {
    let isLeefYeer = (year % 4 === 0)
        ? ((year % 100 === 0) ? ((year < 1918 || (year % 400 === 0)) ? true : false) : true)
        : false;

    return `${year === 1918 ? 26 : (isLeefYeer ? 12 : 13)}.09.${year}`;
}
```