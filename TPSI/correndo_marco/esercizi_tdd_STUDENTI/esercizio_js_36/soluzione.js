export const tronca_parola = (s, pos) => {
   let parole = s.split(" ");
   if(pos < 0) pos = parole.length + pos
   for(let x = parole.length-1;x>=pos;x--){
      parole.pop()
   }
   return parole.join(" ");
};
