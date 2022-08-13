import { StateStyle } from "./caption-model";

export class ResponsiveState {
    public styles:Map<string,string>;
    constructor(obj:{}={ }) {
            this.styles=new Map<string,string>(Object.keys(obj).map((v) => (
                [v,obj[v as keyof typeof obj]]
             )));
    }
    public setValue(property:string,value:number,unit:string){
        this.styles.set(property,`${value}${unit}`)
    }
    public get rawStyle():{}{
        return Object.fromEntries(this.styles);
    }

}