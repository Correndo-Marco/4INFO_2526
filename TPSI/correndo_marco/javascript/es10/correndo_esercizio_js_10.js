function forIn(oggetto,funz,indent = 0){
    const chiavi = Object.keys(oggetto);
    for(let i = 0;i<chiavi.length;i++){
        const ele = oggetto[chiavi[i]];
        if(typeof ele == "object"){
            prova(chiavi[i],"",indent);
            forIn(ele,funz,indent+1);
        }else{
            funz(chiavi[i],ele,indent);
        }
        
    }
}

function prova(chiave,elemento = "",indent){
    indent = indent > 0 ? "\t".repeat(indent) : "";
    console.log(`${indent} ${chiave} : ${elemento}`);
}

const persona = {
    nome : "Marco",
    cognome : "Correndo",
    eta : 17,
    stato : "Italia",
    dataDiNascita : {
        giorno : 28,
        mese : 1,
        anno : 2008
    },
    battezzato : true,
    linguaggi : {
        python : {
            dizionari : {
                conoscenza : true,
                beh : false
            },
            liste : {
                conoscenza : true
            },
            etc : {
                ok : "Ok"
            }
        },
        javascript : {
            oggetti : {
                stoFacendo : true
            },
            domManipulation : {
                siBasta : true,
                esaurito : true,
                okbasta : false
            },
            eccezioni : {
                descrizione : "Tante e non necessarie",
                quindi : true
            }
        },
        c : {
            figo : true
        }
    },
    integrita : "Si, persona molto integra"
};

forIn(persona,prova);