import { expect } from "chai";
import "mocha";
import { TruckBuilder} from '../src/builders/truckBuilder'
import { Truck } from "../src/class.vehicles";
import { VehicleMake } from "../src/interface.enum";

describe("TruckBuilder", () => {
    let truck = new TruckBuilder()
    truck.setMake(VehicleMake.Dodge)
    truck.setModel("Ram")
    truck.setYear(1997)
    truck.getTruck()

    let t1 = new TruckBuilder()
    t1.setMake(VehicleMake.RAM)
    let t2 = new TruckBuilder()
    t2.setMake(VehicleMake.GMC)

    let t3 = new TruckBuilder()
    t3.setMake(VehicleMake.CHEVROLET)

    let t4 = new TruckBuilder()
    t4.setMake(VehicleMake.TOYOTA)

    let t5 = new TruckBuilder()
    t5.setMake(VehicleMake.NISSAN)
    

    it("should be an object", () => {
        expect(truck).to.be.an('object')
    });

    // it("should be made by Dodge", () => {
    //     expect(truck).to.be.an('object').that.includes({"make": "Dodge"})
    // });

    // it("should be dodges model Ram (actually fiat)", () => {
    //     expect(truck).to.be.an('object').that.includes({"model": "Ram"})
    // });

    // it("should have the model year 1997", () => {
    //     expect(truck).to.be.an('object').that.includes({"year": 1997})
    // });


});
