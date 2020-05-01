const helloWorl = () =>{
    return new Promise((resolve,reject)=>{
        (false)
        ? setTimeout(()=>resolve('Hello World'),3000)
        : reject (console.log('Error'))
    })
}

const helloAsync = async() =>{
    const hello = await helloWorl();
    
    console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
    try{
        const hello =await helloWorl()
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}
anotherFunction()