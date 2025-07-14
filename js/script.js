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

for(let i = 0; i < league.length; i++){
  league[i].points = rndmNum(24)
  league[i].sufferedFouls = rndmNum(50)
}

console.log(league)

const miniLeague = []

for(let i = 0; i < league.length; i++){
  let shortInfo = {
    team : league[i].team,
    sufferedFouls : league[i].sufferedFouls,
  }

  miniLeague.push(shortInfo)
}

console.log(miniLeague);