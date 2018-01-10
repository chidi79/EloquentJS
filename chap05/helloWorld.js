function forEach(array, action){
    for(var c = 0; c < array.length; c++){
        action(array[c]);
    }
}

forEach(["This","is","sick","!"], console.log);

/*
    var numbers = [17,18,19,20], sum = 0;
    forEach(numbers, function(number){
        sum += number;
    });
*/

var numbers = [17,18,19,20], sum = 0;
numbers.forEach(function(number){
    sum += number;
});

console.log("sum: "+sum);

console.log(Boolean(0));
console.log(Boolean(1));

var ANCESTRY = [
    {
        name : "David",
        gender : "male",
        birthday : "unknown"
    },
    {
        name : "Patrick",
        gender : "male",
        birthday : "Nov 15"
    },
    {
        name : "Chidiebele",
        gender : "male",
        birthday : "Aug 7"
    },
    {
        name : "Chidubem",
        gender : "male",
        birthday : "Apr 15"
    }
];

/*ANCESTRY.forEach(function(person){
    console.log("Birthday: "+person.birthday);
});*/

var namesakes = ANCESTRY.filter(function(person){
    return person.name.substring(0,4) == "Chid";
});

console.log(JSON.stringify(namesakes));
console.log(namesakes.length);

console.log("ancestry: "+JSON.stringify(ANCESTRY)+"\n");
var myAncestry = JSON.stringify(ANCESTRY);
console.log(JSON.parse(myAncestry).birthdate);

var ancestry = JSON.parse(JSON.stringify(ANCESTRY));
console.log(ancestry.length);

var myString = JSON.stringify({name:"Chidi", birthYear:1979});
console.log(myString);
console.log(JSON.parse(myString).birthYear);