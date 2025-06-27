const reverseString = function(string) {
    let b=''
    string=String(string)
    for (let i =string.length-1;i>=0;i--) {
        let a=[]
        a[i]=string[i]
        b+=a[i]
    }
    return b 
};

// Do not edit below this line
module.exports = reverseString;
