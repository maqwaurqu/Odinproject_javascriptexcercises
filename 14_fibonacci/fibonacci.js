const fibonacci = function(member) {
member=Number(member)
let a0=0
let a1=1
let term=1
if (member>=0){if (member==0) {
    return member
}
else {for (let t=1;t<member;t++){
    term=a1+a0
    a0=a1
    a1=term
}
return term}}
else{
    return 'OOPS'
}
};

// Do not edit below this line
module.exports = fibonacci;
