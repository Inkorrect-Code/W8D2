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
    const resultArray = [];

    for (let col = 0; col < this[0].length; col++){
        const transposed = [];

        for (let row = 0; row < this.length; row++){
            transposed.push(this[row][col])
        };
        resultArray.push(transposed);
    };
    return resultArray;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]