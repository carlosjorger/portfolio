import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveValueService {

  private maxWidth: number = 1450;
  private minWidth: number = 400;
  constructor() { }
  public getResponsiveFontSize(value:number, scale:number,upScale:number=0): number {
    var transformValue = upScale+(value-upScale) * scale;
    var a = ((value - transformValue) / (this.maxWidth - this.minWidth))
    var b=transformValue - this.minWidth * a;
    return Math.round((a * window.innerWidth +b)*100)/100;
  }
}
