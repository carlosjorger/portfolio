import { ChangeDetectionStrategy, ChangeDetectorRef, Component,HostListener, NgZone, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Caption, CaptionState,  CaptionStateStyle } from './utils/caption-position/caption-model';
import { ServiceScrollService } from './services/service-scroll.service';
import { description, subtitle, title } from './core/constans/captions-states';


// import { showIntro } from './animations/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  title: string = 'portfolio';
  pageNumber: number=3;
  realPage:number=0;
  page:number=0;
  appTitle:Caption=title;
  appSubtitle:Caption=subtitle;
  appDescription:Caption=description;
  
  ngOnInit() {
    
    this.serviceScrollService.keepTrackScroll().subscribe(
      value=>{
        this.page=value;
        this.ref.detectChanges();
      }
    );
  }
  
	constructor(
      private serviceScrollService: ServiceScrollService,
      private ref: ChangeDetectorRef
    ) {
    
    }
    ngAfterViewInit() {window.scrollTo(0, this.page );}
}
