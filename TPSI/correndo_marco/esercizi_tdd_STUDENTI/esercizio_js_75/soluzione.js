class Enumera {
    enumera(){
        return Object.keys(this)
    }
}

export class Animale extends Enumera {
    constructor(specie,nome,eta){
        super()
        this.specie = specie
        this.nome = nome
        this.eta = eta
    }
}

export class Automobile extends Enumera {
    constructor(colore,marca,modello){
        super()
        this.colore = colore
        this.marca = marca
        this.modello = modello
    }
}

export class Poligono extends Enumera {
    constructor(lato,n_lati,reg){
        super()
        this.lato = lato
        this.n_lati = n_lati
        this.reg = reg
   }
}