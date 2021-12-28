function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length-1;

    if (arr[0] == 0){
        return arr.length;
    } else if( arr[arr.length-1] == 1){
        return 0;
    } else{
        while (leftIdx <= rightIdx){
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];
    
            if (middleVal == 1){
                if( arr[middleIdx + 1] == 0){
                    zeros = arr.length - middleIdx - 1;
                    return zeros;
                }else{
                    //scrap to the left
                    //start over
                    leftIdx=middleIdx + 1
                }
            }
            if (middleVal == 0){
                if( arr[middleIdx - 1] == 0){
                    zeros = arr.length - middleIdx + 1;
                    return zeros;
                }else{
                    //scrap to the right
                    //start over
                    rightIdx=middleIdx -1
                }
            }   
        }
    }
    return -1;
}
module.exports = countZeroes