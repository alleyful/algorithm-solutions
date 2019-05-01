function processData(input) {
    let array = input.split('\n');
    array.shift();
    
    array.map((value, index) => {
        let odd = '';
        let even = '';

        value.split('').map((value, index) => {
            index % 2 === 0 ? odd += value : even += value;
        })

        console.log(`${odd} ${even}`);
     });
} 
