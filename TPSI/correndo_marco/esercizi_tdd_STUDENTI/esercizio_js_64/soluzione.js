export const count_vocals = (str) => {
    let ris = new Map();
    str.split("").forEach(el => {
        let a = el.toLowerCase();
        "aeiou".includes(a) && ris.set(a,ris.get(a) == undefined ? 1 : ris.get(a)+1); 
    });
    return ris;
}
