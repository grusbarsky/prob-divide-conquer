function sortedFrequency(arr, num) {
    let first = findFirst(arr, num)
    if (first == -1) return first;
    let last = findLast(arr, num)

    let total = last - first + 1;

    return total;
}

function findFirst(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    
    while(rightIdx >= leftIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if(middleIdx === 0 || arr[middleIdx] == num && num > arr[middleIdx - 1]){
            return middleIdx;
        }else if(num > arr[middleIdx]){
            leftIdx = middleIdx + 1;
        }else{
            rightIdx=middleIdx - 1;
        }
    }
    return -1;
}

function findLast(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    
    while(rightIdx >= leftIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if(middleIdx === arr.length - 1 || arr[middleIdx] == num && num < arr[middleIdx + 1]){
            return middleIdx;
        }else if(num < arr[middleIdx]){
            rightIdx = middleIdx - 1;
        }else{
            leftIdx= middleIdx + 1;
        }
    }
    return -1;
}

module.exports = sortedFrequency