var listOfOddNumbers = [1,3,5,7,9];
console.log("listOfOddNumbers: "+listOfOddNumbers);
console.log("listOfOddNumbers has length: "+listOfOddNumbers.length);
console.log("listOfOddNumbers has length "+listOfOddNumbers["length"]);

var myArr = [];
myArr.push("light", "dark", "faux", "real");

console.log(myArr);
console.log("myArr.join(): "+myArr.join("$"));

myArr.pop();
console.log(myArr);

var daysOfTheWeek = {
    "workDays" : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "weekend" : ["Saturday", "Sunday"]
};

console.log(daysOfTheWeek.workDays);

console.log(daysOfTheWeek.workDays.indexOf("Saturday"));

