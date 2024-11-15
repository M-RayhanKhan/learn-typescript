{
//  ternary operator || optional chaining || nullish coalescing operator 

 const age : number = 14;
 if (age >= 18) {
    // console.log('Adult');
 }else{
    // console.log('Not Adult');
 }

 const isAdult = age >= 18 ? "you are adult" : "not adult"

//  console.log(isAdult);
 
// nulish coalescing operator

const isAuthentication = '';

const result1 = isAuthentication ?? 'Guest';
const result2 = isAuthentication ? "How are you" : "Guest"
console.log({result1}, {result2}); 

type User = {
    name: string;
    email?: string;
    contactNo: string
}

const user : User ={ 
    name: 'RNFT',
    contactNo: '015'
}

const email = user?.email ?? "Email not fount"
console.log(email);

}