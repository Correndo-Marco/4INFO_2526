export const protect_email = (email) => {
   let info = email.split("@")[0];
   let ris = info.slice(0,info.length/2).concat("...");
   return ris.concat("@",email.split("@")[1]);
}
