import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceScrollService } from './services/service-scroll.service';


// import { showIntro } from './animations/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
