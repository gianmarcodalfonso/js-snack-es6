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

console.log(bikeCatalog)

let lightest = bikeCatalog[0]

for(let i = 1; i < bikeCatalog.length; i++){
  if(bikeCatalog[i].weight < lightest.weight){
    lightest = bikeCatalog[i];
  }
}
console.log(lightest)

const rndmNum = (max) => Math.floor(Math.random() * max + 1 )

const league = [
  {
    team : `Arsenal`,
    points : 0,
    sufferedFouls : 0,
  },
  {
    team : `Juventus`,
    points : 0,
    sufferedFouls : 0,
  },
  {
    team : `Real Mardid`,
    points : 0,
    sufferedFouls : 0,
  },
  {
    team : `Bayern Munich`,
    points : 0,
    sufferedFouls : 0,
  },
  {
    team : `Paris Saint-Germain`,
    points : 0,
    sufferedFouls : 0,
  },
]

console.log(league)