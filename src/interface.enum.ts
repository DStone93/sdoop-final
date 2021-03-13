export enum VehicleMake {
    RAM = "Fiat",
    Dodge = "Dodge",
    FORD = "Ford",
    CHEVROLET = "Chevrolet",
    GMC = "GMC",
    TOYOTA = "Toyota",
    NISSAN = "Nissan",
    SUBARU = "Subaru",
    HYUNDAI = "Hyundai",
    MISTUBISHI = " Mistubishi"
}


export interface IVehicle {
    make: VehicleMake
    model:string
    year: number
    age: number
}