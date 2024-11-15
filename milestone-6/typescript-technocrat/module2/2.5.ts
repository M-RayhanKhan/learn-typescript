{
    // function with generic

    const createGenericArray = <T>(params: T) : T[] => {
        return [params]
    }

    const res1 = createGenericArray<string>('Bangaldesh')
    interface User  {
        name: string;
         age: number
    }
    const res2 = createGenericArray<User>({name: 'Ibne sina', age: 25})
    
    // tuple function
    const createGenericTuple = <T, Q>(param1: T, param2: Q): [T,Q] => {
        return [param1, param2]
    }
    const res10 = createGenericTuple<string, number>('king', 10)
    const res20 = createGenericTuple<string, {name:string, id:number}>('barabase', {name: 'mojo', id:4})

    const addCourseToStudent = <T>(params: T) => {
        const course = 'Next Level web developer';
        return {
            ...params,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: 'forhad',
        age: 25,
        email: "f@janina.com",
        devType: "NLWD"
    })
    const student2 = addCourseToStudent({
        name: 'Rayhan',
        age: 25,
        email: "R@janina.com",
        devType: "NLWD"
    })

    // 
}