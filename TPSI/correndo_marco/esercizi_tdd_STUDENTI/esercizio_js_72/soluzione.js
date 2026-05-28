export class Studente {
  constructor(n,c){
    this.classe = c
    this.nome = n
  }
}

export class Docente {
  constructor(n,c){
    this.classe = c
    this.nome = n
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  if(obj1 instanceof Studente != obj2 instanceof Studente){
    return false
  }else{
    return JSON.stringify(obj1) == JSON.stringify(obj2)
  }
};
