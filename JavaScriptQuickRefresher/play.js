const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hey, I am ' + this.name);
    },
};
person.greet()