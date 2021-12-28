function findFloor(arr, num) {
    // discard any number higher
    //then return mid

    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end / 2))

        if(arr[mid] == num){
            return arr[mid];
        }

        if(arr[end] <= num){
            return arr[end];
        }

        if(arr[mid] > num){
            end = mid - 1;
        }else if( arr[mid] < num && arr[mid + 1] < num){
            start = mid + 1;
        }else{
            return arr[mid];
        }
    }
    return -1;
}

module.exports = findFloor