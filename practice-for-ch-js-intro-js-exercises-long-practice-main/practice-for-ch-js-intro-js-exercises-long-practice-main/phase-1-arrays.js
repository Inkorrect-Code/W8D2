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

