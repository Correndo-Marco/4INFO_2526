export const invert_case = (str) => {
   let ris = "";
    for(let i = 0;i<str.length;i++){
        let c = str.charAt(i);
        ris += c == c.toLowerCase() ? c.toUpperCase(): c.toLowerCase();
    }
    return ris;
}
