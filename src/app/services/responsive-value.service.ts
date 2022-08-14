import { HostListener, Injectable } from '@angular/core';
import { StateStyle } from '../core/models/caption-model';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveValueService {

  private computerWidth: number = 1450;
  private phoneWidth: number = 400;

  private computerHeigth:number=650;
  private phoneHeigth:number=812;
  constructor() { }
  
 
  private getResponsiveValueByAxis(computer:number,phone:number,
    windowAxis:number,
    stateStyle:StateStyle): number {
    var transformValue =stateStyle.value * stateStyle.scale;
    var a = ((stateStyle.value - transformValue) / (computer - phone))
    var b=transformValue - phone * a;
    return Math.round((a * windowAxis +b)*100)/100;
  }
  public getResponsiveValue(stateStyle:StateStyle): number {
    if (stateStyle.isWidthScale) {
      return this.getResponsiveValueByAxis(this.computerWidth,this.phoneWidth,window.innerWidth,stateStyle) 
    }
    return this.getResponsiveValueByAxis(this.computerHeigth,this.phoneHeigth,window.innerHeight,stateStyle) 
  }
}
