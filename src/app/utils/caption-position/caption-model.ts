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
    constructor(public top:string,public left:string,public transform:string,public fontSize:number, public fontweight:number=400){}
}
