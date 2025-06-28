const sumAll = function(int1,int2) {
    let sum =0
    const a = int1
    const b = int2
    int3=Math.trunc(int1)
    int4=Math.trunc(int2)
    if (((int1>0)&&(int2>0)&&((typeof(int1)=="number")&&(typeof(int2)=="number")&&((int3==a)&&(int4==b))))) 
        {if (int1<int2) {
            for (let i =int1;(i<=int2);i++){
                sum+=i
            }}
        else {
            for (let i =int2;(i<=int1);i++){
                sum+=i
            }}  
    
    return sum
    
    }

    else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
