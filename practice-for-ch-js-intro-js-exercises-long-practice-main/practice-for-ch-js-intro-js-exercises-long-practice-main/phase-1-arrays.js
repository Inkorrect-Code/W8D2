//  dont need to open up the array class to enter it to MP
Array.prototype.myEach = function(proc){
    // 'this' is the equiv to 'self' in ruby
    //  apply this array to every index
    //  'i++' is the same as i += 1 (some nuances but for now yeah)
    // ( ) in a way rep the start and end parts of a ruby function
    // 'callback' is the same idea as a 'proc' in ruby ==> pass in another function to this function
    for (let i = 0; i < this.length; i++){
        let elem = this[i] // gives each elem at each index
        proc(elem)
    }
    return this
}
// this is the callback being passed in
//  note that this can be created outside of the function it is passed into
function print_statement(elem){
    console.log(elem);
}

// let arr1 = ['a', 'b', 'c']
// arr1.myEach(print_statement)
// =========================================================================

Array.prototype.myMap = function(callback) {
    const resultArray = [];
    
    this.myEach(function(elem) {
        resultArray.push(callback(elem));
    });

    // console.log(resultArray)
    return resultArray;
}

function callback(elem){
    return(elem + "!") 
}
let arr1 = ['a', 'b', 'c']
console.log(arr1.myMap(callback))
