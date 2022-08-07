import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { showContacts } from 'src/app/animations/animations';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { CaptionComponent } from '../caption/caption.component';

@Component({
  selector: 'app-caption-subtittle',
  templateUrl: './caption-subtittle.component.html',
  styleUrls: ['./caption-subtittle.component.css'],
  animations:[
    showContacts
  ]
})
export class CaptionSubtittleComponent extends CaptionComponent {

  constructor( _serviceScrollService: ServiceScrollService,
    _ref: ChangeDetectorRef) { 
      super(_serviceScrollService,_ref);
    }
  }
