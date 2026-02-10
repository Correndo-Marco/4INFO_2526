export const tronca = (str, l) => {
    return  l > str.length ? str : str.substring(0,l) + "...";
}
