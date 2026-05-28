export const prod_pow2 = (n) => {
   return n.reduce((prodotto,i) => prodotto*= i**2,1)
};
