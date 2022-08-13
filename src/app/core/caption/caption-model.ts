export class Caption{
    constructor(public states:CaptionState[],public transition:Transition[]=[]){

    }

}
export class Transition{
    constructor(public second:number,public delay:number){}
}
export class CaptionState{
    constructor(public text:string,public captionStyle:CaptionStateStyle){}
}
export class CaptionStateStyle {
    public styles:Map<string,StateStyle>;
    constructor( public fontweight:number=400,obj:{}={ }){
        this.styles=new Map<string,StateStyle>(Object.keys(obj).map((v) => (
            [v,obj[v as keyof typeof obj]]
         )));
    }
    
}
export class StateStyle {
    constructor(public property: string, public scale: number,public isWidthScale:boolean) {

    }
    public get value():number{
        let startWithNumber:RegExp=/^\d+(\.\d)?/;
        let strValue=this.property.match(startWithNumber)?.flat()[0]
        return parseFloat(strValue??"0");
    }
    public get unit():string{
        let startWithNumber:RegExp=/^\d+(\.\d)?/;
        let strValue=this.property.replace(startWithNumber,"");
        return strValue??"";
    }
}

