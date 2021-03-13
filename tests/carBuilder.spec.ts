import { expect } from "chai";
import "mocha";
import { CarBuilder} from '../src/builders/carBuilder'
import { VehicleMake } from "../src/interface.enum";
describe("CarBuilder ", () => {

    // this is silly..
    let car1 = new CarBuilder()
    car1.setMake(VehicleMake.SUBARU)
    car1.setModel("Forester")

    let car2 = new CarBuilder()
    car2.setMake(VehicleMake.HYUNDAI)

    let car3 = new CarBuilder()
    car3.setMake(VehicleMake.TOYOTA)

    let car5 = new CarBuilder()
    car5.setMake(VehicleMake.CHEVROLET)

    let car6 = new CarBuilder()
    car6.setMake(VehicleMake.HYUNDAI)

    let car7 = new CarBuilder()
    car7.setMake(VehicleMake.GMC)

    let car8 = new CarBuilder()
    car8.setMake(VehicleMake.NISSAN)

    let car9 = new CarBuilder()
    car9.setMake(VehicleMake.MISTUBISHI)

    it("should be an object", () => {
        expect(car1).to.be.an('object')
    });


});