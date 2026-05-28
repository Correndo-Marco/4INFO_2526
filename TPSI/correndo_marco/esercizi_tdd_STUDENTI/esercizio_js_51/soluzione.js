export const dec_to_bin = (n) => {
   return n.split("").map((e,i)=> e=="1" ? 2**(n.length-1-i):0).reduce((somma,i)=> somma+=i,0);
};
