{
    // ja ja shikeci;
    // basic data type
    const num: number = 14;
    const stri: string = 'rayhan';
    const bool: boolean = true;


    // primitive data type
    const number: number[] = [10, 12, 13, 14, 15, 30, 17]
    const st: string[] = ['st', 'rt'];

    // tuple order

    const tupleOrder: [number, string] = [14, '15']

    // reference type object

    const user: {
        name: string;
        age: number;
        location: {
            village: string;
            address: string
        }
        contactNo?: string;
        homeTown: string
    } = {
        name: 'st',
        age: 25,
        location: {
            village: 'ctg',
            address: 'nasirkot'
        },
        homeTown: 'chariany'
    }

    //larning function
    // Normal function
    // Arrow function 

    function sumFunction(num1: number, num2: number):number{
        return num1 + num2
    }
    sumFunction(20,10)

    const add = (num1: number, num2:number) => {
        return num1 * num2
    }

    add(6,3)

     // object // function , method
     const person = {
        name: 'nrft',
        age: 90,
        skill: ['html', 'css', 'js'],
        balance: 20,
        add(balance: number){
          console.log(`my balance is: ${this.balance + balance}`);
        }
     }

     person.add(20)



}

