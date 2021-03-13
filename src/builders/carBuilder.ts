import { VehicleMake} from "../interface.enum";
import { Car } from "../class.vehicles";

export class CarBuilder {

    BaseCar = Car;

    private _instance: Car;

    protected get instance() {

        if( !this._instance ){
            this._instance = new this.BaseCar()

        }
        return this._instance;
    }

    setMake(make:VehicleMake) {
        this.instance.make = make;
        switch(make){
            case VehicleMake.FORD: this.BaseCar; break;
            case VehicleMake.CHEVROLET: this.BaseCar; break;
            case VehicleMake.TOYOTA: this.BaseCar; break;
            case VehicleMake.NISSAN: this.BaseCar; break;
            case VehicleMake.SUBARU: this.BaseCar; break;
            case VehicleMake.HYUNDAI: this.BaseCar; break;
            case VehicleMake.MISTUBISHI: this.BaseCar; break;
        }
    }

    setModel(model:string):void {
        this.instance.model = model;
    }

    setYear(year:number){
        this.instance.year = year;

    }

    getCar(){
        return this.instance;
    }
}
