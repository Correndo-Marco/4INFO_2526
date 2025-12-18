let Sommatore = function(n){
    (this.n = n),
    (this.somma = function(){
        let n = this.n;
        n = typeof n == "Number" ? n : Number(n);
        let ris = n * (n+1) / 2;
    console.log(`Risultato per ${n}: ${ris}`);
    })
}

function main(){
    let args = [4,"12",0];
    for(let i = 0;i<args.length;i++){
        let temp = new Sommatore(args[i]);
        temp.somma();
    }
}

main();
