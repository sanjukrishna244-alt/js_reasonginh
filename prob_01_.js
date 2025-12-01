let array_str = ['hi', 'learn', 'js'];

let filtert_main_height = (arr) => {
    try {
        arr.filter((i,index)=>{
             i.length <= arr.length+1 ? arr.splice(index,1):null;
        })
        return arr;
    } catch (error) {
        console.log(error);
    }
}


console.log(filtert_main_height(array_str));