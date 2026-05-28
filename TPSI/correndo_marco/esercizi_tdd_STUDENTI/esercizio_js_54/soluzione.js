export const gen_arr = (len) => {
    let arr = [];
    while(arr.length != len)
        arr.push(Math.floor(Math.random()*1000));
    let arr2 = JSON.parse(JSON.stringify(arr)).reverse();
    return [arr,arr2];
};