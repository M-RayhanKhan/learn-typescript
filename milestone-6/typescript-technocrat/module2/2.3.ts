{
    //generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7,8, 9,10];

    const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7,8, 9,10];

    // const boolArray : boolean[] = [true, false, true];
    const boolArray : GenericArray<boolean> = [true, false, true];

    // const mentors: string[] = ['Joinul abdin']
    const mentors: GenericArray<string> = ['Joinul abdin']

      // generic tuple ;
      type GenericTuple<A, B> = [A,B]
      const cupple : GenericTuple<string, string> = ['R', 'janina k ase']

    const userInformation: GenericTuple<boolean,{name:string, email:string}> = [true, {name: 'abc', email:'a@b.com'}]

    // generic tuple

    interface User {
        name: string;
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: 'mojo',
            age: 25
        },
        {
            name: 'mojo',
            age: 24
        }

  
       
    ]






    // 
}