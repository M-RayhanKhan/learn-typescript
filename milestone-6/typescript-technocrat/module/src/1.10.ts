{
// union type and intersection types

type Developer = "valoDeveloper" | "expertDeveloper";
const developer: Developer = 'expertDeveloper';

type User = {
    name: string;
    email?: string;
    gender: 'Male' | 'Female';
    bloodGrup: "A+" | "O+" | "AB+"
}


const user: User = {
    name: 'ulala',
    gender: 'Female',
    bloodGrup: 'O+'
} 



// intersection types

type FrontEndDeveloper = {
    skills: string[];
    designation1: 'FronEnd Developer';
}
type BackEndDeveloper = {
    skills: string[];
    designation2: 'BackEnd Developer';
}

type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
    skills: ['HTML', 'CSS', 'REACT', 'EXPRESS'],
    designation1: 'FronEnd Developer',
    designation2: 'BackEnd Developer'
}


}