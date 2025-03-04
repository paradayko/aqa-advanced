function someFunc(){
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

someFunc()

//----------------

const someFunc1 = () => 
    new Promise((resolve, reject) => {
       fetch('https://jsonplaceholder.typicode.com/todos/1', {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log(data)
            resolve(data)
        })
        .catch(error => {
            console.log('error: ', error)
            reject(error)
        })
})

//someFunc1()

//--------------

const someFunc2 = () =>
    new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1', {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log(data)
            resolve(data)
        })
        .catch(error => {
            console.log('error: ', error)
            reject(error)
        })
    })

//someFunc2()

const promiseAll = someFunc1()
const promiseAll1 = someFunc2()


Promise.all([promiseAll, promiseAll1])
    .then(res => console.log(res))
    .catch(error => console.log(error))

Promise.race([promiseAll,promiseAll1])
    .then(res => console.log(res))
    .catch(error => console.log(error))

