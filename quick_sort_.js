let array = [64, 34, 25, 12, 22, 11, 90];

const Quick_sort = (arr) => {
    arr.map((el, i) => {
        if (arr[i] > arr[i + 1]) {

            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }

    })
    return array;
}

const _sort = (arr, cb) => {
    console.log(cb(arr));
}

_sort(array, Quick_sort);