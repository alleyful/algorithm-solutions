class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, testScores) {
        super(firstName, lastName, id);

        this.testScores = testScores;
    }

    printPerson() {
        super.printPerson();
    }

    calculate() {
        let average = this.testScores.reduce((target, item) => {
            return target + item;
        }, 0) / this.testScores.length

        if (average < 40) {
            return 'T';
        } else if (average < 55) {
            return 'D';
        } else if (average < 70) {
            return 'P';
        } else if (average < 80) {
            return 'A';
        } else if (average < 90) {
            return 'E';
        } else {
            return 'O';
        }

        
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
}
