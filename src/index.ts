import { CarBuilder } from './builders/carBuilder';
import { TruckBuilder } from './builders/truckBuilder'
import { Truck } from './class.vehicles';
import { CarDirector, TruckDirector} from './directors/director'
import { VehicleMake } from './interface.enum';
import { with4x4, withTowPackage } from './mixins';

const director = new TruckDirector ( TruckBuilder );

const FordF150XLT = director.makeFordF150XLT().getTruck()
FordF150XLT.age;
console.log(FordF150XLT, FordF150XLT.age, 'Years Old')

console.log(/*  */)

const FordF150 = director.makeFordF150().getTruck();
FordF150.age;
console.log(FordF150, FordF150.age, 'Years Old')

console.log(/*  */)

const carDirector = new CarDirector( CarBuilder )

const FordFusion = carDirector.makeFordFusion().getCar();
FordFusion.age;
console.log(FordFusion, FordFusion.age, 'Years Old')

console.log(/*  */)

const Toggled4x4 = with4x4((withTowPackage(Truck)))

let Test = new Toggled4x4()
Test.setTowLimit(6247)
Test.toggle4x4()
console.log(Test)
Test.toggle4x4()
console.log(Test)


