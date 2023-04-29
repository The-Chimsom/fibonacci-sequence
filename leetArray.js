var findMedianSortedArrays = function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length
    let array = nums1.concat(nums2)
    let sum = array.sort(function (a, b) {
      return a - b;
    });
    
         if ((totalLength -1) % 2 !== 0){
            
        let lowerMid = Math.floor((sum.length -1)/2)
        
        let upperMid = Math.ceil((sum.length -1)/2)
        
         return (sum[lowerMid] + sum[upperMid])/2  
    }
    else{
        return sum[(sum.length -1) / 2];
    }
    
};
console.log(findMedianSortedArrays([1,3], [2]))