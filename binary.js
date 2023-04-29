function binarySearch(target){
let array = [-5, 2, 4, 5, 9]
let leftIndex = 0
let rightIndex = array.length - 1;

while(leftIndex <= rightIndex){
    let middleindex = Math.floor((rightIndex + leftIndex)/2)
    if(target === array[middleindex]){
        return middleindex
    }
    if (target < array[middleindex]){
        rightIndex = middleindex - 1
    }
    else {
        leftIndex = middleindex + 1 
    }
}
return -1
}
console.log(binarySearch(12))