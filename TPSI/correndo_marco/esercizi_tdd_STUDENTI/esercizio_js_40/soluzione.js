export const same = (arr1, arr2) => {
   if(arr1.length != arr2.length) return false;
   return arr1.every((el,i) => {return el == arr2[i]});
}
