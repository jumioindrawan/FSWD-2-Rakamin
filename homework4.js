let array = []
let arrGenap = []
let maxGenap
let minGenap
let avgGenap = 0
let totalGenap = 0


let arrGanjil = []
let maxGanjil
let minGanjil
let avgGanjil = 0
let totalGanjil = 0


for (let index = 0; index < 100; index++) {
    array.push(Math.floor(Math.random() * 50));
}


console.log(array)


for (let index = 0; index < array.length; index++) {
    if(index % 2 == 0){
        arrGenap.push(array[index])
    } else {
        arrGanjil.push(array[index])
    }
}


console.log("Array Genap")
console.log(arrGenap)
console.log("Array Ganjil")
console.log(arrGanjil)


function findMax(arr) {
    max = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if(max < arr[index]){
            max = arr[index]
        }
    }
    return max
}
function findMin(arr) {
    min = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if(min > arr[index]){
            min = arr[index]
        }
    }
    return min
}
function findTotal(arr) {
    total = 0
    for (let index = 0; index < arr.length; index++) {
        total += arr[index]
    }
    return total
}
function findAVG(arr) {
    avg = 0
    total = 0
    for (let index = 0; index < arr.length; index++) {
        total = [index]
    }
    avg = total / arr.length
    return avg
}


for (let index = 0; index < 50; index++) {
    minGanjil = arrGanjil[0]
    maxGanjil = arrGanjil[0]
    minGenap = arrGenap[0]
    maxGenap = arrGenap [0]


    if(minGanjil > arrGanjil[index]){
        minGanjil = arrGanjil[index]
    }
    if(minGenap > arrGenap[index]){
        minGenap = arrGenap[index]
    }
    if(maxGanjil < arrGanjil[index]){
        minGanjil = arrGanjil[index]
    }
    if(maxGenap < arrGenap[index]){
        minGenap = arrGenap[index]
    }
    totalGanjil += arrGanjil[index]
    totalGenap += arrGenap[index]
}
avgGanjil = totalGanjil / arrGanjil.length
avgGenap = totalGenap / arrGenap.length


console.log("Data Ganjil")
console.log("Min "+minGanjil)
console.log("Max "+maxGanjil)
console.log("Total "+totalGanjil)
console.log("Rata-rata "+avgGanjil)


console.log("Data Genap")
console.log("Min "+minGenap)
console.log("Max "+maxGenap)
console.log("Total "+totalGenap)
console.log("Rata-rata "+avgGenap)


if(minGanjil > maxGenap){
    console.log("Min Ganjil lebih besar dari Min Genap")
}
else if(maxGanjil < minGenap){
    console.log("Min Genap lebih besar dari Min Ganjil")
}
else{
    console.log("Min pada kedua array sama")
}


if(maxGanjil > maxGenap){
    console.log("Max Ganjil lebih besar dari Max Genap")
}
else if(maxGanjil < minGenap){
    console.log("Max Genap lebih besar dari Max Ganjil")
}
else{
    console.log("Max pada kedua array sama")
}


if(totalGanjil > totalGenap){
    console.log("Total Ganjil lebih besar dari Total Genap")
}
else if(totalGanjil < totalGenap){
    console.log("Total Genap lebih besar dari Total Ganjil")
}
else{
    console.log("Total pada kedua array sama")
}


if(avgGanjil > avgGenap){
    console.log("Rata-rata Ganjil lebih besar dari Rata-rata Genap")
}
else if(avgGanjil < avgGenap){
    console.log("Rata-rata Genap lebih besar dari Rata-rata Ganjil")
}
else{
    console.log("Rata-rata pada kedua array sama")
}

