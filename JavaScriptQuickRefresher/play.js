// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hey, I am ' + this.name);
//     },
// };
//
// const printName = ({name}) => {console.log(name)}
//
// printName(person);
//
// const { name, age } = person;
// console.log(name, age);
//
// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// person.greet()
// const coppiedPerson = {...person};
// console.log(coppiedPerson);
//
// const hobbies = ['Sports', 'Cooking'];
// // for(let hobby of hobbies){
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => {
// //     return 'Hobby: ' + hobby;
// // }));
// // console.log(hobbies);
// const coppiedArray = [...hobbies];
// console.log(coppiedArray);
//
// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1, 2, 3, 4, 5));

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        }).then(text2 => {
        console.log(text2);
    });
}, 2000)

console.log('Hello');
console.log('Hi');