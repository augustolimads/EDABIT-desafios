function moveToEnd(arr, el) {
    return arr.sort(a => a == el ? 1 : -1)
}

console.log( moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)  )