export const no_copies = (array) => {
   return array.filter((e,i)=> array.indexOf(e) == i);
}
