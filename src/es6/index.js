function  newFunction (name, age, country){
    var name = name || 'oscar';
    var age = age || 30;
    var country = country || 'COL'
    console.log(name,age,country)
}

function newFunction2(name = 'Oscar',age = 32,country='MX'){
    console.log(name,age, country)
}
newFunction2();
newFunction2('Camilo', 22, 'CO')