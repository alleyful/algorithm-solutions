class Polygon {
    constructor(array) {
        this.array = array
    }
    
    perimeter(){
        return this.array.reduce((target, arr) => {
            return target + arr;
        }, 0)
    }
}
