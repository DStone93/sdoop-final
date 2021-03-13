// export type ponstructor<T={}> = new (...args:any[]) => T;
export type Constructor = new (...args: any[]) => {};

export function with4x4<Parent extends Constructor>( MixOn:Parent ){
    return class extends MixOn {
        is4x4:boolean = true;
        isIn4x4: boolean = false;
        
        public toggle4x4(){
            if(!this.isIn4x4){
                this.isIn4x4 = true;
            } else {
                this.isIn4x4 = false;
            }
        }
    }
}


export function withTowPackage<Parent extends Constructor>( MixOn:Parent ){
    return class extends MixOn {
        towLimit: number = 6500;

        setTowLimit(limit:number){
            this.towLimit = limit;
        }
    }
}