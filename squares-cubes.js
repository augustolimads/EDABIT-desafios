function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1])? true : false;
}

console.log(checkSquareAndCube([4,8]))