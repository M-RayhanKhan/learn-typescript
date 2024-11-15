{
    // simulate
    
    const createPromise = () => {
        return new Promise((resolve, reject) =>{
            const data = 'simulate';
            if (data) {
                resolve(data)
            }else{
                reject(data)
            }
        }) ;
    };


    // calling create promise function
   const showData = async () => {
    const data = await createPromise();
    console.log(data);
   }





    // 
}