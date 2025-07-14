const bikeCatalog = [
  {
    model : `Btwin`,
    weight : 15,
  },
  {
    model : `Bianchi`,
    weight : 12,
  },
  {
    model : `Colnago`,
    weight : 9,
  },
  {
    model : `Legnano`,
    weight : 14,
  },
  {
    model : `Basso`,
    weight : 16,
  }
]

let lightest = bikeCatalog[0]

for(let i = 1; i < bikeCatalog.length; i++){
  if(bikeCatalog[i].weight < lightest.weight){
    lightest = bikeCatalog[i];
  }
}
console.log(lightest)