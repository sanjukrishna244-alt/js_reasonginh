let array_1 = [12, 11, 13, 5, 6, 16];

const sort_method = (arr) => {
    let n = array_1.length;
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        let key = arr[i];

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }


    return arr;
}

console.log(sort_method(array_1));
