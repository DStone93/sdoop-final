import { expect } from "chai";
import "mocha";
import { CarBuilder } from "../src/builders/carBuilder";
import { TruckBuilder} from '../src/builders/truckBuilder'
import { TruckDirector, CarDirector} from '../src/directors/director'
import { VehicleMake } from "../src/interface.enum";


describe("TruckDirector", () => {
    const d1 = new TruckDirector ( TruckBuilder );
    const FordF150XLT = d1.makeFordF150XLT().getTruck()
    const FordF150 = d1.makeFordF150().getTruck()
    const FordRanger = d1.makeFordRanger().getTruck()
    it("should return a FordF150XLT  as an object", () => {
        expect(FordF150XLT).to.be.an('object')
    });
    it("should return a Ford F150 as an object", () => {
        expect(FordF150).to.be.an('object')
    });
    it("should return a Ford Ranger as an object", () => {
        expect(FordRanger).to.be.an('object')
    });
    it("should expect FordF150XLT to have the age of 10", () => {
        expect(FordF150XLT.age).to.equal(10)
    });
    it("should expect FordF150XLT to be a ford", () => {
        expect(FordF150XLT.make).to.equal("Ford")
    });
    it("should expect FordF150XLT to be a XLT", () => {
        expect(FordF150XLT.model).to.equal("F150 XLT")
    });
    it("should expect FordF150XLT to be a 2011 model", () => {
        expect(FordF150XLT.year).to.equal(2011)
    });
    
});

describe("CarDirector", () => {
    const d1 = new CarDirector ( CarBuilder );
    const FordFusion = d1.makeFordFusion().getCar()

    it("should return a Ford Fusion as an object", () => {
        expect(FordFusion).to.be.an('object')
    });
    it("should expect FordFusion to be a Ford", () => {
        expect(FordFusion.make).to.equal("Ford")
    });
    it("should expect FordFusion to be a Fusion", () => {
        expect(FordFusion.model).to.equal("Fusion")
    });
    it("should expect FordFusion to be a 2018 model", () => {
        expect(FordFusion.year).to.equal(2018)
    });
    it("should expect FordFusion to have the age of 3", () => {
        expect(FordFusion.age).to.equal(3)
    });

});
