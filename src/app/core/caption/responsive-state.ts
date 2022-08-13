import { StateStyle } from "./caption-model";

export class ResponsiveState {
    public styles:Map<string,string>;
    constructor(public FontSizeScale: number,
        public TopScale: number,public maxWidthScale:number,
        public fontSize: number = 0,public top: number = 0,
        public maxWidth:number=0,obj:{}={ }) {
            this.styles=new Map<string,string>(Object.keys(obj).map((v) => (
                [v,obj[v as keyof typeof obj]]
             )));
    }
    public setValue(property:string,value:number,unit:string){
        this.styles.set(property,`${value}${unit}`)
    }

}