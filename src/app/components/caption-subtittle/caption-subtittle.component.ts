import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { showContacts } from 'src/app/animations/animations';
import { CaptionStates } from 'src/app/core/constans/models/captions-states';
import { DelayTimeServiceService } from 'src/app/services/delay-time-service.service';
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
     _responsiveService: ResponsiveValueService,
     _delayTimeServiceService:DelayTimeServiceService,
     _elRef: ElementRef,
    _renderer: Renderer2) { 
      super(_serviceScrollService,_ref,_captionStates,
        _responsiveService,_delayTimeServiceService,_elRef,_renderer);

        this.responsiveState.FontSizeScale=2.8;
        this.responsiveState.TopScale=1.7;
    }
  }
   