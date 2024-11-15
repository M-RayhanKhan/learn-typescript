{
// type assertion

 let anyThingtype : any;

 anyThingtype = 'Hey Developer';
 anyThingtype = 22555;
(anyThingtype as number);
(anyThingtype as string);

const kgToGm = (value: number | string): number | string | undefined => {
    if (typeof value === 'string') {
        const convertedValue = parseFloat(value) * 1000;
        return convertedValue;
    }
    if (typeof value === 'number') {
        return value * 1000;
    }
}

 const result1 = kgToGm(100) as number;
 const result2 = kgToGm('100') as string;

 type CustomError ={
    message: string;
 }

 try {
    
 } catch (error) {
    console.log((error as CustomError).message);
 }

    // 
}