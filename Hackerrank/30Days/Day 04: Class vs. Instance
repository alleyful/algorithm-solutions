function Person(initialAge){
    // Add some more code to run some checks on initialAge
    let currentAge;
    if (initialAge < 0) {
        console.log('Age is not valid, setting age to 0.');
        currentAge = 0;
    } else {
        currentAge = initialAge;
    }
    
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    let message = 'You are old.';

    currentAge < 18 &&
      (message = currentAge < 13 ? 'You are young.' : 'You are a teenager.')

    console.log(message);
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       return ++currentAge;
   };
}
