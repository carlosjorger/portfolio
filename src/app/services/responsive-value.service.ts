import { HostListener, Injectable } from '@angular/core';
import { StateStyle } from '../core/caption/caption-model';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveValueService {

  private computerWidth: number = 1450;
  private phoneWidth: number = 400;

  private computerHeigth:number=650;
  private phoneHeigth:number=812;
  constructor() { }
  public getResponsiveWidth(value:number, scale:number,upScale:number=0): number {
    return this.getResponsiveValueByAxis(this.computerWidth,this.phoneWidth,window.innerWidth
      ,value, scale)
  }
 
  private getResponsiveValueByAxis(computer:number,phone:number,
    windowAxis:number,
    value:number, scale:number): number {
    var transformValue = value * scale;
    var a = ((value - transformValue) / (computer - phone))
    var b=transformValue - phone * a;
    return Math.round((a * windowAxis +b)*100)/100;
  }
  public getResponsiveValue(value:number, scale:number, isWidthScale:boolean): number {
    if (isWidthScale) {
      return this.getResponsiveValueByAxis(this.computerWidth,this.phoneWidth,window.innerWidth,value,scale) 
    }
    console.log(window.innerHeight)
    return this.getResponsiveValueByAxis(this.computerHeigth,this.phoneHeigth,window.innerHeight,value,scale) 
  }
}
