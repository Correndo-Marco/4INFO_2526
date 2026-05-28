export const avg_age = (l) => {
    return l.reduce((somma,i)=>somma+=i.eta,0)/l.length;    
};
