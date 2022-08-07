import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { CaptionComponent } from '../caption/caption.component';

@Component({
  selector: 'app-caption-description',
  templateUrl: './caption-description.component.html',
  styleUrls: ['./caption-description.component.css'],
})
export class CaptionDescriptionComponent extends CaptionComponent {

  constructor( _serviceScrollService: ServiceScrollService,
    _ref: ChangeDetectorRef) { 
      super(_serviceScrollService,_ref);
    }
protected override FontSizescale: number=2.5;
  

}
