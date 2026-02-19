export const swap = (l, n, m) => {
    n = n < 0 ? l.length+n:n;
    m = m < 0 ? l.length+m:m;
    let el = l.splice(n,1);
    l.splice(m,0,el);
    return l;
};
