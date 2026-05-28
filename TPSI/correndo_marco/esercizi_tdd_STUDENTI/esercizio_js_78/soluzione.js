export class Orario {
    constructor(h,m,s){
        this.h = h
        this.m = m
        this.s = s
    }
    getUnixTime(){
        return this.h * 3600 + this.m * 60 + this.s;
    }
    min(ora2,ora3){
        let orari = new Map();
        ([this,ora2,ora3]).forEach(e => orari.set(e.getUnixTime(),e));
        return orari.get(Array.from(orari.keys()).sort()[0]);
    }
}
