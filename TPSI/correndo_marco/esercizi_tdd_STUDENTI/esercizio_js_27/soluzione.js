export const capitalize_all = (str) => {
   let parole = str.trim().split(" ");
   let tot = "";
   for(let i = 0;i<parole.length;i++){
      tot += parole[i].charAt(0).toUpperCase() + parole[i].substring(1,(parole[i]).length) + ( i == parole.length - 1 ? "" : " "); 
   }
   return tot;
}
