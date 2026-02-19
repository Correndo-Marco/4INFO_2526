export const reverse = (l) => {
    let rev = [];
    l.forEach(e => {rev.unshift(e);});
    rev.unshift(l.reduce((somma,e) => somma+e,0));
    return rev;
}