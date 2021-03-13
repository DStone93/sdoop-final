import { IVehicle } from "./interface.enum";
import { VehicleMake } from "./interface.enum";
import { with4x4 } from "./mixins";

const todaysDate = new Date().getFullYear();

export class Vehicle implements IVehicle{
    make: VehicleMake;
    model:string;
    year: number

    get age(){
        return todaysDate - this.year
    }
}

export class Truck extends Vehicle {

    // isIn4x4?: boolean

    // static add4x4(){
    //     with4x4(Truck)
        
    // }    
}

export class Car extends Vehicle {}