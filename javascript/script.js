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

console.log('vi odio zucchine', pesoTotale);

// SNACK 2

const zucchineCorte =[];
const zucchineLunghe =[];

zucchine.filter(zucchina =>{
  if (zucchina.lunghezza < 15){
    return zucchineCorte.push(zucchina);
  }else{
    return zucchineLunghe.push(zucchina);
  }
})

console.log(zucchineCorte);
console.log(zucchineLunghe);


let pesoTotaleCorte = 0;
zucchineCorte.forEach(zucchina => {
  pesoTotaleCorte += zucchina.peso;
});

console.log(pesoTotaleCorte);


let pesoTotaleLunghe = 0;
zucchineLunghe.forEach(zucchina => {
  pesoTotaleLunghe += zucchina.peso;
});

console.log(pesoTotaleLunghe);


// SNACK 3
const parola = 'zucchine';

function rigiraStr (str){
  return str.split('').reverse().join('')
}

rigiraStr(parola);

console.log(rigiraStr(parola));