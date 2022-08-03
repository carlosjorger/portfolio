export class Caption{
    constructor(public states:CaptionState[]){}
}
export class CaptionState{
    constructor(public text:string,public captionStyle:CaptionStateStyle,public second:number,public delay:number){}
}
export class CaptionStateStyle {
    constructor(public top:string,public left:string,public transform:string,public fontSize:string, public fontweight:number=400){}
}
