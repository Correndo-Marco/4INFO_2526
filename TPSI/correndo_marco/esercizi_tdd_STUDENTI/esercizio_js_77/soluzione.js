export class Fibonacci {
    calc(n){
        let a = 1,b = 0;
        for(let i of Array(n).keys())
            [a , b] = [a + b , a]
        return b;
}}
