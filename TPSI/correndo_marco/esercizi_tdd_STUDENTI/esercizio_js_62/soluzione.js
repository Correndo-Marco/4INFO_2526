export const unique_random_numbers = (n, m) => {
   const rand = (min,max) => {
      return Math.floor(Math.random() * (max - 1))
   }
   let ris = new Set()
   while(ris.size < n)
      ris.add(rand(n,m))
   return Array.from(ris).sort()
}
