export const reverse = (l) => {
    let rev = [];
    l.forEach(e => {rev.unshift(e);});
    return rev;
};
