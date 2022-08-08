import { Component, OnInit } from '@angular/core';
import { CaptionStates } from 'src/app/core/constans/models/captions-states';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { Caption } from 'src/app/core/caption-position/caption-model';

@Component({
  selector: 'app-caption-section',
  templateUrl: './caption-section.component.html',
  styleUrls: ['./caption-section.component.css'],
  animations:[
  ]
})
export class CaptionSectionComponent implements OnInit {

  page: number = 0;
  appTitle:Caption;
  appSubtitle:Caption;
  appDescription:Caption;
  constructor(private captionState: CaptionStates,private serviceScrollService: ServiceScrollService) {
    this.appTitle=captionState.title;
    this.appSubtitle=captionState.subtitle;
    this.appDescription=captionState.description;
  }
  ngOnInit(): void {
    this.serviceScrollService.keepTrackScroll().subscribe(
      async value => {
        this.page=value;        
      }
    );
  }

}
