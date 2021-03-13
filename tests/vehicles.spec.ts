import { expect } from "chai";
import "mocha";
import {Vehicle} from '../src/class.vehicles'

describe("class Vehicle", () => {
    let v1 = new Vehicle();
    it("should have a make thats undefined", () => {
        expect(v1.make).to.be.undefined;
    });
    it("should have a model thats undefined", () => {
        expect(v1.model).to.be.undefined;
    });
    it("should have a year thats undefined", () => {
        expect(v1.year).to.be.undefined;
    });
    it("should return age as NaN", () => {
        expect(v1.age).to.be.NaN;
    });
});
