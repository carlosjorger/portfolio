import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { showContacts } from 'src/app/animations/animations';
import { CaptionStates } from 'src/app/core/constans/captions-states';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { CaptionComponent } from '../caption/caption.component';

@Component({
  selector: 'app-caption-subtittle',
  templateUrl: './caption-subtittle.component.html',
  styleUrls: ['./caption-subtittle.component.scss'],
  animations:[
    showContacts
  ]
})
export class CaptionSubtittleComponent extends CaptionComponent {

  constructor( _serviceScrollService: ServiceScrollService,
    _ref: ChangeDetectorRef,_captionStates:CaptionStates,
     _responsiveService: ResponsiveValueService) { 
      super(_serviceScrollService,_ref,_captionStates,
        _responsiveService);
    }
    protected override FontSizeScale: number=2.8;
  }
  