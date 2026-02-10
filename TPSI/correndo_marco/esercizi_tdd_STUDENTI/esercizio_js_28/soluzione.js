export const upper_case = (str) => {
    let ris = "";
    for(let i = 0;i<str.length;i++){
        let c = str.charCodeAt(i);
        ris += ( c >= 97 && c <= 122) ? String.fromCharCode(c - 32) : str.charAt(i) ;
    }
    return ris;
}
