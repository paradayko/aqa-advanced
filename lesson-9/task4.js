const person = {
    firstName: 'Andrii',
    lastName: 'Poshtaruk',
    age: 23
};
person.email = 'a.poshtaruk@icloud.com';
delete person.age;
console.log(person)