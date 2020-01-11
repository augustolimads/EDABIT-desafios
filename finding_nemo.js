function findNemo(sentence) {
    return sentence.split(' ').includes('Nemo') ? `I found Nemo at ${sentence.split(' ').indexOf('Nemo') + 1}!` :
        "I can't find Nemo "
}

console.log(findNemo("I am finding Nemo !"));