let array_val = [3, -1, 5, 0, -2];
const find_positive_num_sum = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        element > 0 ? sum = sum + element : null;
    });
    return sum;
}
function main(array_vals, cb) {
    console.log(cb(array_vals));
}

main(array_val, find_positive_num_sum);