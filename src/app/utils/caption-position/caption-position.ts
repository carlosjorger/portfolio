export class Caption{
    constructor(public text:string,public captionStyle:CaptionStyle){}
}
export class CaptionStyle {
    constructor(public top:string,public left:string,public transform:string,public fontSize:string){}
}
