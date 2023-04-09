function linearSearch(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([-5,2,10,4,6],10));
console.log(linearSearch([-5,2,10,4,6],6));
console.log(linearSearch([-5,2,10,4,6],7));

// Binary Search

 function binarySearch(arr,target){
   let leftIndex =0;
   let rightIndex = arr.length - 1;
   while(leftIndex<=rightIndex){
    let middleIndex = Math.floor((leftIndex+rightIndex)/2);
    if(target === arr[middleIndex]){
        return middleIndex;
    }
    if(target<arr[middleIndex]){
        rightIndex = middleIndex-1;
    }
    else{
        leftIndex = middleIndex+1;
    }
   }
   return -1;
 }
 console.log(binarySearch([1,2,3,4,6],10));
console.log(binarySearch([1,2,3,4,6],6));
console.log(binarySearch([1,2,3,4,6],2));

//Binary Search ruccursion
function recurisiveBinarySearch(arr, target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1;
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2);
    if(target === arr[middleIndex]){
        return middleIndex;
    }
    if(target<arr[middleIndex]){
       return search(arr,target,leftIndex,middleIndex-1);
    }
    else{
      return  search(arr,target,middleIndex+1,rightIndex);    }  
}
console.log(recurisiveBinarySearch([1,2,3,4,6],3));
console.log(recurisiveBinarySearch([1,2,3,4,6],6));
console.log(recurisiveBinarySearch(["apple", "banana", "pinapple"],"apple"));