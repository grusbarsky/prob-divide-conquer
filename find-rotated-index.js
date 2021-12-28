function findRotatedIndex(arr, num) {
    pivot = findPivot(arr)

    if(arr[pivot] > num && num >= arr[0]){
        let rightIdx = pivot;
        let leftIdx = 0;

        return findNum(arr, num, leftIdx, rightIdx)
    
    }else{
        let rightIdx = arr.length - 1;
        let leftIdx = pivot - 1;

        return findNum(arr, num, leftIdx, rightIdx)
    }
}

// pivot is the highest number before it pivots to lowest
function findPivot(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1; 

    while(rightIdx >= leftIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(arr[middleIdx] > arr[middleIdx + 1]){
            return middleIdx;
        }else if(arr[middleIdx] < arr[middleIdx + 1]){
            leftIdx = middleIdx + 1;
        }else{
            rightIdx = middleIdx - 1;
        }
    }
    return -1;
}

function findNum(arr, num, leftIdx, rightIdx){

    while(rightIdx >= leftIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        
        if(arr[middleIdx] > num){
            rightIdx = middleIdx - 1;
        }else if(arr[middleIdx] < num){
            leftIdx = middleIdx + 1;
        }else{
            return middleIdx;
        }
    }
    return -1;
}

module.exports = findRotatedIndex