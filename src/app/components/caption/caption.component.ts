import { ChangeDetectorRef, Component, HostListener, Input, NgZone, OnInit, } from '@angular/core';

import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { getAnimationParameters, showContacts, showIntro } from '../../animations/animations';
import { Caption, CaptionState, CaptionStateStyle, Transition } from '../../core/caption/caption-model';
import { CaptionStates } from 'src/app/core/constans/models/captions-states';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
import { DelayTimeServiceService } from 'src/app/services/delay-time-service.service';
import { ResponsiveState } from 'src/app/core/caption/responsive-state';
@Component({

  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css'],
  animations: [
    // animation triggers go here
    showIntro,
    showContacts

  ]
})
export class CaptionComponent implements OnInit {
  @Input() captionStates: Caption = new Caption([]);

  public responsiveState:ResponsiveState=new ResponsiveState(2,1.1,2);



  text: String = "";
  page: number = 0;

  GetTextDictionary = new Map<number, CaptionState>([]);

  protected firstPages: number = 1;

  public contactPosition: number;

  public transition: Transition=this.updateTransitionPage(this.page);

  public get firsPosition(): CaptionState {
    return this.captionStates.states[Math.min(this.page,
      this.captionStates.transition.length - 1)];

  }

  public get secondPosition(): CaptionState {
    return this.captionStates.states[Math.min(this.page + 1,
      this.captionStates.transition.length - 1)];

  }

  constructor(private serviceScrollService: ServiceScrollService,
    private ref: ChangeDetectorRef, private captionState: CaptionStates,
    private responsiveService: ResponsiveValueService,
    private delayTimeServiceService: DelayTimeServiceService) {
    this.contactPosition = captionState.ContactPos + this.firstPages;

  }
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.GetTextDictionary = new Map<number, CaptionState>(
      this.captionStates.states.map(
        (caption: CaptionState, i: number) =>
          [i + this.firstPages, caption])
    );
    this.updateTextByPage();
    this.serviceScrollService.keepTrackScroll().subscribe(
      async targetPage => {
        if (targetPage != this.page) {
          this.transition = this.updateTransitionPage(targetPage);
          await this.delayTimeServiceService.delayTimeAndDo(
            this.transition.delay,
            () => {
              this.page = targetPage;
              this.updateTextByPage();
            }
          );
          this.ref.detectChanges();
        }
      }
    );
    this.responsiveState.top = this.responsiveService
      .getResponsiveFontSize(this.firsPosition.captionStyle.top, this.responsiveState.TopScale,60);
    this.responsiveState.fontSize = this.responsiveService
      .getResponsiveFontSize(this.firsPosition.captionStyle.fontSize, this.responsiveState.FontSizeScale);
    this.responsiveState.maxWidth= this.responsiveService
    .getResponsiveFontSize(this.firsPosition.captionStyle.maxWidth, this.responsiveState.maxWidthScale);
    console.log(this.responsiveState.maxWidth)
    // this.responsiveState.maxWidthScale=this.responsiveService
    //   .getResponsiveFontSize(this.firsPosition.captionStyle.maxWidthScale, this.responsiveState.maxWidthScale)
  }
  public updateTextByPage(): void {
    this.text = this.GetTextDictionary.get(this.page)?.text ?? "";
  }
  public updateTransitionPage(targetPage:number){
    let index=Math.min(targetPage, this.page, this.captionStates.transition.length - 1);
    return this.captionStates.transition[index];
  }
  public getAnimationParamter() {
    return getAnimationParameters(
      this.firsPosition,
      this.responsiveState.fontSize,
      this.responsiveState.top,
      this.responsiveState.maxWidth,
      this.secondPosition,
      this.responsiveState.fontSize,
      this.responsiveState.top,
      this.responsiveState.maxWidth,
      this.transition);
  }

}