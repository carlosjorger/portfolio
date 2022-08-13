import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveValueService {

  private computerWidth: number = 1450;
  private phoneWidth: number = 400;
  private computerHeigth:number=650;
  private phoneHeigth:number=812;
  constructor() { }
  public getResponsiveFontSizeWidth(value:number, scale:number,upScale:number=0): number {
    return this.getResponsiveFontSize(this.computerWidth,this.phoneWidth
      ,value, scale,upScale)
  }
  public getResponsiveFontSizeHeigth(value:number, scale:number,upScale:number=0): number {
    
    return this.getResponsiveFontSize(this.computerHeigth,this.phoneHeigth
      ,value, scale,upScale)
  }
  private getResponsiveFontSize(computer:number,phone:number,value:number, scale:number,upScale:number=0): number {
    var transformValue = upScale+(value-upScale) * scale;
    var a = ((value - transformValue) / (computer - phone))
    var b=transformValue - phone * a;
    return Math.round((a * window.innerWidth +b)*100)/100;
  }
}
