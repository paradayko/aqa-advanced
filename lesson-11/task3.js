const someFunc =  () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {method: 'GET'})
    .then(resp => resp.json())
    .then(data => {
        console.log('GET Responce: ', data)
    })
    .catch(err => {
        console.log('Error: ', err)
    }
    )
}

// firstFunc()

//-----------------

const firstPromise = async () => {
    try{
    const fetch2 = await fetch('https://jsonplaceholder.typicode.com/todos/1', {method: 'GET'})
    const resFetch2 = await fetch2.json()
    console.log(resFetch2)
    return resFetch2
    }
    catch(err) {
        throw new Error(err)
    }
}

// secondFunc()

//------------

async function secondPromise() {
    try{
        const fetch3 = await fetch('https://jsonplaceholder.typicode.com/users/1', {method: 'GET'})
        const resFetch3 = await fetch3.json()
        console.log(resFetch3)
        return resFetch3
    } catch(err){
        throw new Error(err)
    }
}

const firstFunc = firstPromise();
const secondFunc = secondPromise(); 

Promise.all([firstFunc,secondFunc])
    .then(res => console.log(res))
    .catch(err => console.log(err))

Promise.race([firstFunc,secondFunc])
    .then(res => console.log(res))
    .catch(err => console.log(err))