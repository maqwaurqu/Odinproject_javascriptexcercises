const repeatString = function(string,num) {
    if (num>=0){
    let a =''
    for (let i =0;i<num;i++){
        a += string
        
    }
    return a
}

else {
    return "ERROR"
}

};

repeatString('hey',3)
// Do not edit below this line
module.exports = repeatString;
