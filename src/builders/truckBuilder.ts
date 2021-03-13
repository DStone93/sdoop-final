
import { VehicleMake} from "../interface.enum";
import { with4x4, withTowPackage } from '../mixins'
import { Truck } from "../class.vehicles";


export class TruckBuilder {

    BaseTruck = Truck;

    private _instance: Truck;

    protected get instance() {

        if( !this._instance ){
            this._instance = new this.BaseTruck()

        }
        return this._instance;
    }

    

    add4x4(){
        this.BaseTruck = with4x4( this.BaseTruck )
    }
    
    addTowPackage (){
        this.BaseTruck = withTowPackage( this.BaseTruck )
    }

    setMake(make:VehicleMake) {
        this.instance.make = make;
        switch(make){
            case VehicleMake.RAM: this.BaseTruck; break;
            case VehicleMake.FORD: this.BaseTruck; break;
            case VehicleMake.GMC: this.BaseTruck; break;
            case VehicleMake.CHEVROLET: this.BaseTruck; break;
            case VehicleMake.TOYOTA: this.BaseTruck; break;
            case VehicleMake.NISSAN: this.BaseTruck; break;
        }
    }

    setModel(model:string):void {
        this.instance.model = model;
    }

    setYear(year:number){
        this.instance.year = year;
    }

    getTruck(){
        return this.instance;
    }
}

