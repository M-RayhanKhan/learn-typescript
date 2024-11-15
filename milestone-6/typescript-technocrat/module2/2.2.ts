{
    // 

    type User1 = {
        name: string;
        salary: number;
    }

    type UserWithMoney = User1 & { money: number };

    interface User2 {
        name: string;
        age: number;
    }
    interface User2WithDream extends User1 {
        role: string;
    }

    const user: User2WithDream = {
        name: 'ka',
        salary: 20,
        role: 'markting'
    }

    // js / object , array ->  object function -> object

    type Roll = number[];

    interface Roll2 {
        [index: number] : number;
    }

    const rollNumber2: Roll2 = [12, 14, 34 , 78];

    type Add = (num1: number, num2: number, num3: number) => number;

    interface Add2 {
        (num1: number, num2: number, num3: number) : number;
    }
    const add: Add2 = (num1 , num2, num3) => num1 + num2 + num3;


    // 
}