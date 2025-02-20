const car1 = {
    brand: 'Volkswagen',
    model: 'Passat',
    year: 2014
}

const car2 = {
    brand: 'Volvo',
    model: 'V50',
    owner: 'Andrii'
}

const car3 = {...car2 , ...car1};
console.log(car3);