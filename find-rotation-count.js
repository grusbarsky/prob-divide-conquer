function findRotationCount(arr) {
    pivot = findPivot(arr)

    total = pivot + 1;

    console.log("PIVOT: " + pivot)
    return total;
}


function findPivot(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1; 

    while(rightIdx >= leftIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if(arr[middleIdx] > arr[middleIdx + 1] ){
            return middleIdx;
        }else if(arr[middleIdx] < arr[middleIdx - 1]){
            return middleIdx - 1;
        }else if(arr[middleIdx] < arr[middleIdx + 1]){
            leftIdx = middleIdx + 1;
        }else{
            rightIdx = middleIdx - 1;
        }
    }
    return -1;
}

module.exports = findRotationCount