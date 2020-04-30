function  newFunction (name, age, country){
    var name = name || 'oscar';
    var age = age || 30;
    var country = country || 'COL'
    console.log(name,age,country)
}

//S6
function newFunction2(name = 'Oscar',age = 32,country='MX'){
    console.log(name,age, country)
}
newFunction2();
newFunction2('Camilo', 22, 'CO')

//Template literal

let hello = "Hello"
let world = "World";

let epicPhrase = hello +" " +world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)


let lorem  = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum suscipit fuga culpa deserunt dolores provident accusantium, fugit,\n" + "eius sequi, qui voluptatibus natus nisi at numquam. Praesentium, dolores ex. Quae! \n"
+ "Camilo"
//ES6
let lorem2  = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nesciunt 
quis deleniti saepe sed iste, et error odit culpa? Voluptates sit blanditiis aperiam asperiores nemo neque veniam similique accusamus dolores!`;
console.log(lorem)
console.log(lorem2)

//Destructuracion elementos
let person = {
    'name': 'Camilo',
    'age': 30,
    'country':'COL'
}
console.log(person.name,person.age)
//ES6
let{name,age,country} = person;
console.log(name,age,country)

//Propagacion

let team1 = ['Oscar','Camilo','Julian']
let team2 = ['Martha','Camila','Carolina']

let education = ['David',...team1,...team2]
console.log(team1)
console.log(team2)
console.log(education)

// Declaracion de variables

{
    var global = "global"

}
{
    let globalLet = 'Global Let'
}
console.log(global)
console.log(globalLet)

const a  = 'b'


let name = 'Camilo'
let age = 30
//ES5
obj = {name: namem, age:age}

//ES6
obj2 = {name,age}

const name = [
    {name: 'Camilo', age:30},
    {name: 'Martha', age:40}
]

let listOfName = name.map(item=>console.log(item.name))

const listOfName3 = (name,age,country)=>{
    ...
}

const listOfName4 = name =>{
    ...
}

const square = num => num * num;

const helloPromise = () =>{

    return new Promise((resolve,reject)=>{
        if(true){
            resolve('HEY!')
        }else{
            reject('UPS!')
        }
    })

}

helloPromise()
.then(res => console.log(res))
.catch(err => console.log(err))