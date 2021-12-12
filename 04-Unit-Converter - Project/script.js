const Kelvin = 293;
const Celcius = Kelvin - 273;
let Fahrenhayt = Celcius * (9 / 5) + 32;
console.log(`Bugün sıcaklık fahrenhayt cinsinden: ${Fahrenhayt} celciuscinsinden: ${Celcius} `)
Fahrenhayt = Math.round(Fahrenhayt);
console.log(`${Fahrenhayt}`)