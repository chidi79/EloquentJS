//example showing the reduce higher order function, which calls 'flat()' on each element of the array

var myArr = [[1,2,3],[4,5],[6]];

console.log(myArr.reduce(function(flat, current){
    return flat.concat(current);
}));