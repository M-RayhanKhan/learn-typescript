{
    //larning function
    // Normal function
    // Arrow function 

    // function add(num1: number, num2: number = 10): number {
    //     return num1 + num2
    // }
    // add(24, 22)

    const addArrow = (num1: number, num2: number) => num1 + num2;
    addArrow(10, 7)


    // object // function , method

    const poorUser = {
        name: 'khan',
        balance: 5,
        addBalance(balance: number): string {
            return `my new balance is:  ${this.balance + balance}`
        }
    }

    const arr: number[] = [20, 14, 10];

    const arayMap: number[] = arr.map((sum: number): number => sum + sum)
}