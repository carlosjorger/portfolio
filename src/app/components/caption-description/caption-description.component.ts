import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { CaptionStates } from 'src/app/core/constans/captions-states';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { CaptionComponent } from '../caption/caption.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-caption-description',
  templateUrl: './caption-description.component.html',
  styleUrls: ['./caption-description.component.css'],
})
export class CaptionDescriptionComponent extends CaptionComponent {


  constructor(_serviceScrollService: ServiceScrollService,
    _ref: ChangeDetectorRef, _captionStates: CaptionStates,
    _responsive: BreakpointObserver
  ) {
    super(_serviceScrollService, _ref, _captionStates,
      _responsive);


  }
  


}
