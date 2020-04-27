var twoDimenArray = [["Pothos", 4], ["Peace Lilly", 2], ["Rubber Plant", 3]]
console.log(twoDimenArray);
console.log(twoDimenArray[0])
console.log(twoDimenArray[0][1])

twoDimenArray.forEach(outer => {
    outer.forEach(inner => {
        console.log(inner)
    })
});

for (const i in twoDimenArray) {
    var plant = twoDimenArray[i]
    for (const j in plant) {
        console.log(plant[j])
    }
}

for (var i = 0; i < twoDimenArray.length; i++) {
    var plant = twoDimenArray[i]
    for (var j = 0; j < plant.length; j++) {
        console.log(plant[j])
        
    }
}

console.log("Before push, the array is : " + twoDimenArray)
// Adds an element to the end of the array.
twoDimenArray.push(["Snake Plant", 6])
console.log("After push, the array is : " + twoDimenArray)

// Can only remove the last item.
twoDimenArray.pop()
console.log("After pop, the array is : " + twoDimenArray)
// Can only remove the first item.
twoDimenArray.shift()
console.log("After shift, the array is : " + twoDimenArray)

twoDimenArray.unshift(["Areca Palm", 2])
console.log("After unshift, the array is : " + twoDimenArray)


