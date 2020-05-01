const data = {
    frontend: 'Camilo',
    backend: 'Martha',
    diseñadora: 'Maria'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)


//Object values

const data1 = {
    frontend: 'Camilo',
    backend: 'Martha',
    diseñadora: 'Maria',
}

const values = Object.values(data1);
console.log(values.length)

//Pading

const string = 'hello';
console.log(string.padStart(8, 'hi '))
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(15, ' -----'))