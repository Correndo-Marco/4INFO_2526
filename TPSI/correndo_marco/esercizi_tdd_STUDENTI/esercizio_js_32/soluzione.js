export const special_concat = (str1, str2) => {
    if(!str1.length || !str2.length) return "parole non adatte";
    if(str1.split(" ").length != 1 || str2.split(" ").length != 1) return "parole non adatte"; 
    let primiDueChar = [str1.substring(0,2),str2.substring(0,2)]
    return primiDueChar[1] + str1.substring(2,str1.length) + primiDueChar[0] + str2.substring(2,str2.length)
};
