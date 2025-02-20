const ObjectArr = [
    {
        name: "Andrii",
        Surname: 'Poshtaruk',
        age: 23,
        city: 'Lutsk'

    },
    {
        name: 'Stepan',
        Surname: 'Rudnytskii',
        age: 45,
        city: 'Kyiv'
    },
    {
        name: 'Viktor',
        Surname: 'Stepanenko',
        age: 19,
        city: 'Lviv'
    }

]

for (const elem of ObjectArr) {
    console.log(elem)
    const {name, Surname, age, city} = elem
    console.log(`The person's name is ${name} ${Surname}, he is ${age} years old. He lives in ${city}`)
}
