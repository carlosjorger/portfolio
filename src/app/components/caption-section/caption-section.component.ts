import { Component, OnInit } from '@angular/core';
import { description, subtitle, title } from 'src/app/core/constans/captions-states';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { Caption } from 'src/app/utils/caption-position/caption-model';

@Component({
  selector: 'app-caption-section',
  templateUrl: './caption-section.component.html',
  styleUrls: ['./caption-section.component.css'],
  animations:[
  ]
})
export class CaptionSectionComponent implements OnInit {

  page: number = 0;
  appTitle:Caption=title;
  appSubtitle:Caption=subtitle;
  appDescription:Caption=description;
  constructor(private serviceScrollService: ServiceScrollService) {
  }
  ngOnInit(): void {
    this.serviceScrollService.keepTrackScroll().subscribe(
      async value => {
        this.page=value;        
      }
    );
  }

}
