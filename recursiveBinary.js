function recursiveBinarySearch(arr, target){
return search(arr, target, 0, arr.length - 1)
}
function search(arr, target, leftIndex, rightIndex){
    if (leftIndex > rightIndex){
        return -1
    }
    let middleindex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleindex]){
        return middleindex
    }
    if(target < arr[middleindex]){
       return search(arr, target, leftIndex, middleindex -1)
    } else {
      return  search(arr, target, middleindex + 1, rightIndex)
    }
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))