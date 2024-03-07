// SNACK 1

const zucchine =[
  {
    varieta: 'nera',
    peso : 100,
    lunghezza: 10 
  },

  {
    varieta: 'napoletana',
    peso : 150,
    lunghezza: 15 
  },

  {
    varieta: 'romanesca',
    peso : 120,
    lunghezza: 12 
  },

  {
    varieta: 'fiorentina',
    peso : 80,
    lunghezza: 7 
  },

  {
    varieta: 'tonde',
    peso : 130,
    lunghezza: 5 
  },

  {
    varieta: 'trombetta',
    peso : 90,
    lunghezza: 12
  },

  {
    varieta: 'patisson',
    peso : 150,
    lunghezza: 24 
  },

  {
    varieta: 'gialla',
    peso : 90,
    lunghezza: 21
  },

  {
    varieta: 'friulana',
    peso : 130,
    lunghezza: 18 
  },
  {
    varieta: 'crookneck',
    peso : 150,
    lunghezza: 19
  }
];

let pesoTotale = 0;

zucchine.forEach(zucchina => {
  pesoTotale += zucchina.peso;
})

console.log('vaffanculo stronzi', pesoTotale);

