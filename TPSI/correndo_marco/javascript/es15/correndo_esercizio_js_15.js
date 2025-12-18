let Fibonacci = function(n){
    (this.n = Number(n)),
    (this.calcola = function(){
        let ris = [0,1];
        for(let i = 0;i<this.n;i++){
            ris.push(ris[i] + ris[i+1]);
        }
        console.log(`${this.n} => ${ris[this.n]}`)
    })
}


function main(){
    let inputs = [40,10,5,"4",6,"100",0];
    for(let i = 0; i< inputs.length;i++){
        let fib = new Fibonacci(inputs[i]);
        fib.calcola()
    }
}

main()
