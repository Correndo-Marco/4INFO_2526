const enumera = function(){
    console.log("Info sui attributi: ");
    for(let i in this){
        console.log(i);
    }
    console.log();
}

let Automobile = function(modello,colore,marca){
    (this.modello = modello),
    (this.colore = colore),
    (this.marca = marca),
    (this.mostra = function(){
        console.log(`Macchina: ${this.marca} ${this.modello} ${this.colore}`);
    }),
    (this.vroom = function(){
        console.log("VROOOMM!!!!");
    }),
    (this.enumera = enumera)
}

let Animale = function(famiglia,specie,continente){
    (this.famiglia = famiglia),
    (this.specie = specie),
    (this.continente = continente),
    (this.verso = function(){
        console.log("OOOO!");
    }),
    (this.muoviti = function(){
        console.log("Mi sono mosso...");
    }),
    (this.enumera = enumera)
}

let Poligono = function(nome,lati,area){
    (this.nome = nome),
    (this.lati = lati),
    (this.area = area),
    (this.info = function(){
        console.log(`${this.nome} ha ${this.lati} ed ha area ${this.area}`)
    }),
    (this.verifica = function(){
        let nomi = ["Triangolo","Quadrato","Pentagono","Esagono","Ettagono","Ottagono","Ennagono","Decagono"];
        if( this.lati > 0 && this.lati < 11 && this.nome == nomi[this.lati-3]){
            console.log("Poligono confermato");
        }else{
            console.log("Poligono non valido");
        }
    }),
    (this.enumera = enumera)
}
function main(){
    let istanze = [[["Aventador","rosso","Lamborghini"],["500L","verde","Fiat"]],[["Mammiferi","Panda","Asia"],["Invertebrati","Lombrico","Europa"]],[["Triangolo",3,10],["Ottagono",5,90]]];
    let tipi = [Automobile,Animale,Poligono];
    let nomi = ["Automobile","Animale","Poligono"];
    let allObjects=[];

    for(let i = 0;i<tipi.length;i++){
        let tipo = tipi[i];
        let oggetti = [];
        for(let j = 0;j<istanze[i].length;j++){
            let args = istanze[i][j];
            let temp = new tipo(args[0],args[1],args[2]);
            oggetti.push(temp);
        }
        allObjects.push(oggetti);
    }

    for(let i=0;i<allObjects.length;i++){
        for(let j =0;j<allObjects[i].length;j++){
            let ogg = allObjects[i][j];
            console.log(`Metodi per il ${j+1} ${nomi[i]}`);
            switch(i){
                case 0:
                    ogg.mostra();
                    ogg.vroom();
                    break;
                case 1:
                    ogg.verso();
                    ogg.muoviti();
                    break;
                case 2:
                    ogg.info();
                    ogg.verifica();
                    break;
            }
            ogg.enumera();
        }
    }
}

main();

