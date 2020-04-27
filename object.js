const plant = {
    "plant name": "Rubber Plant",
    sizeInches: 24,
    color: "Green"
}

console.log("Plants color is " + plant.color)
console.log("Access property using brackets " + plant["plant name"]);

plant.color = "Burgundy"

console.log(plant);

plant["soil"] = "Trustbasket"

console.log(plant)

delete plant.sizeInches

console.log(plant)