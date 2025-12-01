
let array = [64, 25, 12, 22, 11];


const sort_main = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxintex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[maxintex]) {
                maxintex = j;
            }

            if (maxintex !== i) {
                let temp = arr[i];
                arr[i] = arr[maxintex];
                arr[maxintex] = temp
            }
        }

    }

    return arr;
}


console.log(sort_main(array));


