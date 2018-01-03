var listOfOddNumbers = [1,3,5,7,9];
console.log("listOfOddNumbers: "+listOfOddNumbers);
console.log("listOfOddNumbers has length: "+listOfOddNumbers.length);
console.log("listOfOddNumbers has length "+listOfOddNumbers["length"]);
console.log("\n");

var myArr = ["rich","poor","house","field"];
myArr.push("light", "dark", "faux", "real");

console.log(myArr);
console.log("myArr.join(): "+myArr.join("$"));
console.log("\n");

myArr.pop();
console.log(myArr);
console.log("\n");

var daysOfTheWeek = {
    "workDays" : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "weekend" : ["Saturday", "Sunday"]
};

console.log(daysOfTheWeek.workDays);
console.log(daysOfTheWeek.workDays.indexOf("Saturday"));
console.log("weekdays" in daysOfTheWeek);
console.log("\n");

for (var weekDay in daysOfTheWeek){
    console.log("the entries in "+ weekDay +" are: " +daysOfTheWeek[weekDay]);
}

