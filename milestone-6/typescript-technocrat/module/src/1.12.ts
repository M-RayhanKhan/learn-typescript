{
//nullable type

// const searchName = (params: string | null) =>{
//     if (params) {
//         console.log('success');
//     }else{
//         console.log('error');
//     }
// }
// searchName(null)

const getSpreadInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
        const convertSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertSpeed} ms^-1`);
    }else if (typeof value === 'string') {
        const [num , st] = value.split(' ')
        const converSpeed = (parseFloat(num) * 1000) / 3600;
        console.log(`string speed ${converSpeed}`);
    }
}
getSpreadInMeterPerSecond('1000 ms')



// 
}