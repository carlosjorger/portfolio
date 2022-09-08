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
  scrollRef: number = 0;

  public get classes(): {} {
    return this.responsiveService.classes;
  }
  
  constructor(private responsiveService: ResponsiveValueService) {
    this.updateBodyTitleResponsiveState();
  }

  ngOnInit(): void {
    this.updateBodyTitleResponsiveState();
  }

  @HostListener('window:resize', ['$event'])
  updateBodyTitleResponsiveState(): void {
    this.responsiveService.getResponsiveFormat();
  }
}
