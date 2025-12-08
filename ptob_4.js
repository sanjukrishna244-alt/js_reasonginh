/// merg sord 
let arr_merg = [3, 12, 4, 19, 3, 8, 5, 92, 1, 17]
let merge_sort = (arr) => {
    if (arr.length <= 1) {
        return arr;

    }


    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return main_sort(merge_sort(left), merge_sort(right));
}


let main_sort = (left, right) => {
    console.log(left, right);
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;

        } else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(merge_sort(arr_merg));
