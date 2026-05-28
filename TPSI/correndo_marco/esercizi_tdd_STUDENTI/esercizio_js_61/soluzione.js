export function count_occurence(text) {
   let a = new Map()
   text.split(" ").forEach(el => a.set(el, a.get(el) == undefined ? 1 : a.get(el)+ 1));
   return a;
}
