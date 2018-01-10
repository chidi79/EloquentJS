var myArr = [[1,2,3],[4,5],[6]];

console.log(myArr.reduce(function(flat, current){
    return flat.concat(current);
}));

