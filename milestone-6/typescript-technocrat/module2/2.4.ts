{

    // interface genefic;
    interface Developer <T, U = null>{
        name: string;
        age: number;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        umbrella?: U
    }
    type Watch = {
        name:string;
        price: number
    }

    const poorDeveloper: Developer<Watch> = {
        name: 'persian',
        age: 43,
        computer:{
            brand: 'lenovo',
            model: 'N2h3',
            releaseYear: 2017,
        },
        smartWatch:{
            name: 'current',
            price: 4800
        }
    };


    interface AppleWatch {
        barnd: string;
        model: string;
        heartTrack: boolean
    }
 
    interface Umbrella {
        price: number
    }

    const richDeveloper: Developer<AppleWatch, Umbrella> = {
        name: 'Rich Dev',
        age: 800,
        computer:{
            brand: "HP",
            model: "X-25UR",
            releaseYear: 2021
        },
        smartWatch:{
            barnd: 'Apple',
            model: "HKM",
            heartTrack: true
        },
        umbrella:{
            price: 400,
        }
    }



    // 

}