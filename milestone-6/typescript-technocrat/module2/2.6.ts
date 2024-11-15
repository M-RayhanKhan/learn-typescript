{
    // constrains 

    const addCourseToStudent = <T extends {id:number;name:string;age:number; email: string}>(params: T) => {
        const course = 'Next Level web developer';
        return {
            ...params,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        age: number;
        email: string;
        devType: string;
    }>({
        id: 11,
        name: 'forhad',
        age: 25,
        email: "f@janina.com",
        devType: "NLWD"
    })
    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        age: number;
        email: string;
        devType: string;
    }>({
        id: 22,
        name: 'Rayhan',
        age: 25,
        email: "R@janina.com",
        devType: "NLWD"
    })
    const student3 = addCourseToStudent<{
        id: number;
        name: string;
        age: number;
        email: string;
        devType: string;
    }>({
        id: 22,
        name: 'Rayhan',
        age: 25,
        email: "R@janina.com",
        devType: "NLWD"
    })


    // 
}