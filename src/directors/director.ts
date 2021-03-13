import {TruckBuilder} from '../builders/truckBuilder'
import {CarBuilder} from '../builders/carBuilder'
import {VehicleMake} from '../interface.enum'



export class TruckDirector {

    constructor(public builder:typeof TruckBuilder ){
    }

    // constructor(builder:typeof TruckBuilder | typeof CarBuilder ){
    //     :()
    // }

    private baseTruck(){
        const builder = new this.builder()
        return builder;
    }

    makeFordF150(){
        const builder = this.baseTruck()
        builder.addTowPackage()
        builder.setMake(VehicleMake.FORD)
        builder.setModel("F150")
        builder.setYear(2019)
        return builder;
    }

    makeFordF150XLT(){
        const builder = this.baseTruck();
        builder.addTowPackage()
        builder.add4x4()
        builder.setYear(2011)
        builder.setMake(VehicleMake.FORD)
        builder.setModel("F150 XLT")
        return builder;
    }

    makeFordRanger(){
        const builder = this.baseTruck();
        builder.add4x4()
        builder.setYear(2015)
        builder.setMake(VehicleMake.FORD)
        builder.setModel("Ranger")
        return builder;
    }

    

}

export class CarDirector {
    

    constructor(public builder:typeof CarBuilder){
    }

    private baseCar(){
        const builder = new this.builder()
        return builder;
    }

    makeFordFusion(){
        const builder = this.baseCar()
        builder.setMake(VehicleMake.FORD)
        builder.setModel("Fusion")
        builder.setYear(2018)
        return builder;
    }


}
