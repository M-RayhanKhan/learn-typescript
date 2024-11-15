{
  //  generic constrains with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship"
  type Owner2 = keyof Vehicle;

  const owner: Owner2 = 'bike'

  const PropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]
  }

  const user = {
    name: "Koyta",
    age: 203,
    address: "nai"
  }
  const car = {
    name: "Toyota",
    age: 3,
     year: 2023
  }

  const result1 = PropertyValue(car, 'age')
  // 
}