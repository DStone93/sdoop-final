import { expect } from "chai";
import "mocha";
import { Truck } from "../src/class.vehicles";
import { with4x4, withTowPackage } from "../src/mixins";

describe("Mixins", () => {
    const Toggled4x4 = with4x4((withTowPackage(Truck)))
    let Test = new Toggled4x4()
    Test.setTowLimit(6247)
    Test.toggle4x4()
    Test.toggle4x4()
    Test.toggle4x4()

    it("should be an object that includes the towLimit", () => {
        expect(Test).to.be.an('object').that.includes({"towLimit": 6247})
    });

    it("should be an object that includes 4x4", () => {
        expect(Test).to.be.an('object').that.includes({"is4x4": true})
    });

    it("should be in 4x4", () => {
        expect(Test).to.be.an('object').that.includes({"isIn4x4": true})
    });
});