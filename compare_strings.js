function comp(str1, str2) {
    let boolean;
    if(str1.length == str2.length){
        boolean = true;
    }else{
        boolean = false;
    }
    return boolean;
}

console.log(comp("ola","bcd"));

function comp2(str1, str2){
    return str1.length == str2.length
}

console.log(comp2('oi', 'nao'))