import { ChangeDetectionStrategy, ChangeDetectorRef, Component,HostListener, NgZone, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {BehaviorSubject, delay, interval, Observable, of, Subscription} from 'rxjs'
import { changeIntroPosition } from './animations/animations';
import { Caption, CaptionState,  CaptionStateStyle } from './utils/caption-position/caption-position';
import { ServiceScrollService } from './services/service-scroll.service';
import { description, title } from './core/constans/captions-states';


// import { showIntro } from './animations/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // animation triggers go here
    changeIntroPosition
  ]
})
export class AppComponent implements OnInit {
  title: string = 'portfolio';
  pageNumber: number=3;
  realPage:number=0;
  page:number=0;
  appTitle:Caption=title;
  appDescription:Caption=description;
  pageEmitter$ = new BehaviorSubject<number>(this.page);
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
