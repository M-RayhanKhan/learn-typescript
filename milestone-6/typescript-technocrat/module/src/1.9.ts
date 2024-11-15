{
    // type Alias

    type Student =
        {
            name: string;
            age: number;
            contactNo?: string;
            address: string;
            gender: string
        }



    const student1: Student = {
        name: 'king',
        age: 25,
        contactNo: '01866',
        address: 'ctg',
        gender: 'male'
    }


    const student2: Student ={
        name: 'Queen',
        age: 5,
        contactNo: '1111',
        address: 'cdg',
        gender: 'female'
    }
    const student3: Student = {
        name: 'lsdkll',
        age: 5,
        address: 'cdg',
        gender: 'female'
    }

    type Name = string;
    type Age =number;
    type IsTrue = boolean

    const myName: Name= 'joinul abden'
    const myAge:number = 33;
    const isMarried: IsTrue = true

    type Add = (x:number, y: number) =>  {
       
    }
    const add: Add = (num1, num2) => {
        return num1 + num2
    }




    // 
}