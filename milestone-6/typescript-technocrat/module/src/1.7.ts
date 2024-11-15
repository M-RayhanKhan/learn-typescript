{
//   spread operator
//   rest operator
//   destructuring


// learn spread operator
const bros1: string[] = ['nasir', 'Moyaj', 'forhad', 'abrar']

const bors2: string[] = ['khan', 'nur', 'hasan'];

bros1.push(...bors2)

const frontEndD ={
    name: 'forhad',
    skill: ['HTML','CSS','JAVASCRIPT', 'REACT', 'TYPESCRIPT'],
    age: 23
}
const backEndD ={
    name: 'nasir',
    skill: ['HTML','CSS','JAVASCRIPT', 'MongoDb', 'node.js'],
    age: 26
}

const fullStackDeveloper = {
    ...frontEndD,
    ...backEndD
}

}
