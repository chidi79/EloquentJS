var hashLine = "";
var size = 8;

for (var vCount = 0; vCount < size; vCount++){    
    
    for(var hCount = 0; hCount < size; hCount++){
        if((vCount % 2 == 0 && hCount % 2 == 0) || (vCount % 2 == 1 && hCount % 2 == 1))
            hashLine+=" ";
        else
            hashLine+="#";
    }

    hashLine+="\n";    
}
console.log(hashLine);
