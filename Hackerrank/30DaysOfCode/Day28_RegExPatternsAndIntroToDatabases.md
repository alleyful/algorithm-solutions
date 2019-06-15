# Day 28: RegEx, Patterns, and Intro to Databases
  
## Objective 
Today, we're working with regular expressions. Check out the Tutorial tab for learning materials and an instructional video!

## Task 
Consider a database table, Emails, which has the attributes First Name and Email ID. Given  rows of data simulating the Emails table, print an alphabetically-ordered list of people whose email address ends in .

## Input Format

The first line contains an integer, , total number of rows in the table. 
Each of the  subsequent lines contains  space-separated strings denoting a person's first name and email ID, respectively.

## Constraints

Each of the first names consists of lower case letters  only.
Each of the email IDs consists of lower case letters ,  and  only.
The length of the first name is no longer than 20.
The length of the email ID is no longer than 50.

## Output Format

Print an alphabetically-ordered list of first names for every user with a gmail account. Each name must be printed on a new line.

### Sample Input
```
6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com
Sample Output
```

### Sample Output
```
julia
julia
riya
samantha
tanya
```


---

## Solution

```javascript
function main() {
    const N = parseInt(readLine(), 10);
    const patten = new RegExp("@gmail.com");
    const names = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        patten.test(emailID) && names.push(firstName);
    }

    names.sort().forEach(name => console.log(name));
}
```
