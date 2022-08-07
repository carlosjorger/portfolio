import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { showContacts } from 'src/app/animations/animations';
import { CaptionStates } from 'src/app/core/constans/captions-states';
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
    _ref: ChangeDetectorRef,_captionStates:CaptionStates) { 
      super(_serviceScrollService,_ref,_captionStates);
    }
    protected override FontSizescale: number=2.5;
  }
  