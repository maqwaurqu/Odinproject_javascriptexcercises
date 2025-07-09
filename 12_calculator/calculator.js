const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(...args) {
    let b =0
    {for (let i =0;(i<args[0].length);i++){
      b+=args[0][i]
    }}
    return b
};

const multiply = function(...args) {
    let b =1
    {for (let i =0;(i<args[0].length);i++){
      b=b*args[0][i]
    }}
    return b
};

const power = function(x,n) {
	return x**n
};

const factorial = function(x) {
	let b =1
  for (let i =1;(i<=x);i++){
    b=b*i
  }
  return b
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
