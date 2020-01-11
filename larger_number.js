function whichIsLarger(f, g) {
    return f() > g() ? 'f' :
        g() > f() ? 'g' :
        'neither'
}

console.log(whichIsLarger(() => 10, () => 10))