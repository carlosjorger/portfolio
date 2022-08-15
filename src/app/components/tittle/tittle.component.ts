import { Component, HostListener, OnInit } from '@angular/core';
import { } from 'src/app/animations/animations';
import * as AOS from 'aos';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
import { ResponsiveState } from 'src/app/core/models/responsive-state';
import { StateStyle } from 'src/app/core/models/caption-model';
import { Monad } from 'src/app/core/decorators/Monad';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss'],
  preserveWhitespaces: true
})
export class TittleComponent implements OnInit {

  name: string = 'Carlos Jorge'
  lastName: string = 'Rodriguez Cuello'
  profesion: string = 'FullStack Engineer.'

  public fontSizeSate = new StateStyle("7vw", 1.3, true);
  public subtitleFontSizeSate = new StateStyle("6vw", 1.3, true);

  public topSate = new StateStyle("1%", 10, true);
  public bodyTitleResponsiveState: ResponsiveState=new ResponsiveState({});

  constructor(private responsiveService: ResponsiveValueService) {
    this.updateBodyTitleResponsiveState();
    
  }
  scrollRef: number = 0;
  
  ngOnInit(): void {
  }
  @HostListener('window:resize', ['$event'])
  updateBodyTitleResponsiveState():void{
    this.bodyTitleResponsiveState=new ResponsiveState({
      position:'relative',
      top:`${this.responsiveService.getResponsiveValue(this.topSate)}%`
    })
  }
  @Monad<string>()
  splitDescription(theString: string,stateStyle:StateStyle): { letter: string, responsiveState: ResponsiveState }[] {
    let scala: number = 1.2;
    return [...theString].map((v, i) => (
      {
        letter: v == " " ? "&nbsp;" : v,
        responsiveState: new ResponsiveState({
          animationDelay:`${this.animationDelay(theString,i,scala)}s`,
          fontSize: `${this.responsiveService.getResponsiveValue(stateStyle)}vw`
        })
      }
    ));
  }
  animationDelay(string:string,position:number,scala: number):number{
    return Math.round(((position + 1) / string.length) * 10 * scala) / 10
  }
}
