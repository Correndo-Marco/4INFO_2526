export const order = (l) => {
   const isP = (e) => {
      if(e==1) return true
      for(let i=2;i<e/2+1;i++){
         if(e%i==0) return false
      }
      return true;
   };
   let a = l.filter((e) => isP(e))
   a.push(l.filter((e) => !isP(e)))
   return a
};