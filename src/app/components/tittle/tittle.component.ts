import { Component, HostListener, OnInit } from '@angular/core';
import { } from 'src/app/animations/animations';
import * as AOS from 'aos';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
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
  fontSize: number = 7;
  subtitleFontSize: number = 6;
  public transformFontSize: number = 7;
  public subtitleTransformFontSize: number = 6;

  scaleFontSize: number = 1.3;
  constructor(private responsiveService: ResponsiveValueService) {

  }
  scrollRef: number = 0;
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    document.addEventListener('scroll', ($event: Event) => {
    });
    this.transformFontSize = this.responsiveService.getResponsiveFontSize(this.fontSize, this.scaleFontSize);
    this.subtitleTransformFontSize = this.responsiveService.getResponsiveFontSize(this.subtitleFontSize, this.scaleFontSize);
  }
  splitDescription(theString: string): { letter: string, fract: number }[] {
    let scala: number = 1.2;
    return [...theString].map((v, i) => (
      {
        letter: v == " " ? "&nbsp;" : v,
        fract: Math.round(((i + 1) / theString.length) * 10 * scala) / 10
      }
    ));
  }

}
