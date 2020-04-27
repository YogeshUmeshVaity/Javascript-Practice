function isStrictEqualToSeven(number) {
    // doesn't cast. same with !==
    return number === 7
}

function isEqualToSeven(number) {
    // casts the given object to integer. same with !=
    return number == 7
}

console.log(isStrictEqualToSeven('7'))
console.log(isStrictEqualToSeven(7))

console.log(isEqualToSeven('7'))
console.log(isEqualToSeven(7))
