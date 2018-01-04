function arrayToList(myArr){
    var myList = null;
    for( var c = (myArr.length)-1; c >= 0 ; c--){
        myList = {value: myArr[c], rest: myList};
    }

    console.log("myList: "+myList.value+","+myList.rest);
}

arrayToList([1,3,5,7]);