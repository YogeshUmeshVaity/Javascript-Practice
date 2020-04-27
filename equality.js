function isStrictEqualToSeven(number) {
    // doesn't cast.
    return number === 7
}

function isEqualToSeven(number) {
    // casts the given object to integer
    return number == 7
}

console.log(isStrictEqualToSeven('7'))
console.log(isStrictEqualToSeven(7))

console.log(isEqualToSeven('7'))
console.log(isEqualToSeven(7))
