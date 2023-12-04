Array.prototype.uniq = function(){
    const resultArray = [];

    for (let i = 0; i < this.length - 1; i++){
        if (!resultArray.includes(this[i])) {
            resultArray.push(this[i]);
        };
        
    };

    return resultArray

}

//console.log([1,2,2,3,3,3].uniq()) // => [1,2,3]

// ================

Array.prototype.twoSum = function(){
    const resultArray = [];

    for (let i = 0; i < this.length; i++){
        for (let j = 0; j < this.length; j++){
            if (i < j){
                if (this[i] + this[j] === 0){
                    resultArray.push([i, j])
                };
            };
        };
    };
    return resultArray
}

// console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]

Array.prototype.transpose = function(){

}