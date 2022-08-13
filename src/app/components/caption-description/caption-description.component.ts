import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { CaptionStates } from 'src/app/core/constans/models/captions-states';
import { DelayTimeServiceService } from 'src/app/services/delay-time-service.service';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { CaptionComponent } from '../caption/caption.component';

@Component({
  selector: 'app-caption-description',
  templateUrl: './caption-description.component.html',
  styleUrls: ['./caption-description.component.css'],
})
export class CaptionDescriptionComponent extends CaptionComponent {


  constructor( _serviceScrollService: ServiceScrollService,
    _ref: ChangeDetectorRef,_captionStates:CaptionStates,
    _responsiveService: ResponsiveValueService,
    _delayTimeServiceService:DelayTimeServiceService,
    ) { 
      super(_serviceScrollService,_ref,_captionStates,
        _responsiveService,_delayTimeServiceService);
      
    }
  

}
