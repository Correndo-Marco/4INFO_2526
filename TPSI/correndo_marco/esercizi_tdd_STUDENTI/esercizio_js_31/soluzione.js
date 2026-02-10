export const search_words = (ph) => {
    const str = "parole non trovate";
    if(ph.includes("coding") || ph.includes("creativo")){
        return ph;
    }
    return str;
};
