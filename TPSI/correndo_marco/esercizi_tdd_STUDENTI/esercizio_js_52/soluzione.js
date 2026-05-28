export const psw_gen = (len) => {
    const random = (min,max) => {
        return Math.floor(Math.random()*max)+min;
    }
    let password=[];
    while(password.length != len){
        let ch = String.fromCharCode(random("0".charCodeAt(0),"z".charCodeAt(0)));
        if(ch.match("[a-zA-Z0-9]"))
            password.push(ch)
    }
    console.log(password);
    return password;
}
