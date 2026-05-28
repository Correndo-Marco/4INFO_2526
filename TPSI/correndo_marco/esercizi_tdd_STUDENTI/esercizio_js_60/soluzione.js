export function is_anagram(arr) {
    let b = new Map(),l = [];
    for(let i of arr)
        b.set(i.toUpperCase().split("").sort().join(""),i)
    b.forEach((el,k) => l.push(el));
    return l;
}
