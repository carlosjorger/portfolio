import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveValueService {

  private computerWidth: number = 1450;
  private phoneWidth: number = 400;

  private computerHeigth:number=650;
  private phoneHeigth:number=812;

  private  _isPhonePortrait = false;
  private  _isWeb = false;
  private  _isTable = false;

  public get isPhonePortrait():boolean{
    return this._isPhonePortrait;
  }
  public get isWeb():boolean{
    return this._isWeb;
  }
  public get isTable():boolean{
    return this._isTable;
  }
  constructor(private responsive: BreakpointObserver) { }
  
  public getResponsiveFormat(){
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait,Breakpoints.Medium ,Breakpoints.Large,])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        this._isPhonePortrait = breakpoints[Breakpoints.HandsetPortrait];
        this._isWeb = breakpoints[Breakpoints.Large]||breakpoints[Breakpoints.Medium];
        this._isTable=breakpoints[Breakpoints.TabletPortrait];
      }
    );
  }
}
