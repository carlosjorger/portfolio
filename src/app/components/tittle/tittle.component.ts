import { Component, HostListener, OnInit } from '@angular/core';
import { } from 'src/app/animations/animations';
import * as AOS from 'aos';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
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

  constructor(private responsiveService: ResponsiveValueService) {
    this.updateBodyTitleResponsiveState();
    
  }
  scrollRef: number = 0;
  public get isPhonePortrait():boolean{
    return this.responsiveService.isPhonePortrait;
  }
  public get isWeb():boolean{
    return this.responsiveService.isWeb;
  }
  public get isTable():boolean{
    return this.responsiveService.isTable;
  }

  ngOnInit(): void {
    this.updateBodyTitleResponsiveState();
  }
  @HostListener('window:resize', ['$event'])
  updateBodyTitleResponsiveState():void{
    this.responsiveService.getResponsiveFormat();
  }
  @Monad<string>()
  splitDescription(theString: string): { letter: string, delay:string }[] {
    let scala: number = 1.2;
    return [...theString].map((v, i) => (
      {
        letter: v == " " ? "&nbsp;" : v,
        delay:`${this.animationDelay(theString,i,scala)}s`,
      }
    ));
  }
  animationDelay(string:string,position:number,scala: number):number{
    return Math.round(((position + 1) / string.length) * 10 * scala) / 10
  }
}
