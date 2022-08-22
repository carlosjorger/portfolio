import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveValueService {

  public classes: {} = {};

  constructor(private responsive: BreakpointObserver) { }

  public getResponsiveFormat() {
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait, Breakpoints.Medium, Breakpoints.Large,])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        this.classes = {
          'is-phone-portrait': breakpoints[Breakpoints.HandsetPortrait],
          'is-web': breakpoints[Breakpoints.Large] || breakpoints[Breakpoints.Medium],
          'is-table': breakpoints[Breakpoints.TabletPortrait],
        }
      }
      );
  }
}
