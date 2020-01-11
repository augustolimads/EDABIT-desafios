const countdown = start => [...Array(start + 1).keys()].reverse();

function countdown(start) {
    let arr = [];
        arr.push(start);

    for (let index = 0; index < arr.length; index++) {
        let element = arr.push(start - 1)[index];
        return element;
    }
}

//-----------------------

function count(arr){
    arr.push(start - count)
}

function countdown2(start) {
    let arr = []
    let count = 0
    
    if (arr === 0) {
        return arr
    } else {
        count + 1
        countdown2(start)
    }
}

console.log(countdown2(0));