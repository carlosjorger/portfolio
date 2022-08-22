import { ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Input, NgZone, OnInit, Renderer2, } from '@angular/core';

import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { AnimationPatameter, showContacts, showIntro } from '../../animations/animations';
import { Caption, CaptionState, Transition } from '../../core/models/caption-model';
import { CaptionStates } from 'src/app/core/constans/captions-states';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ResponsiveValueService } from 'src/app/services/responsive-value.service';
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

  text: String = "";
  page: number = 0;

  GetCaptionStateByPage = new Map<number, CaptionState>([]);

  protected firstPages: number = 1;

  public contactPosition: number;

  public transition: Transition = this.updateTransitionPage(this.page);

  public get classes():{}{
    return this.responsiveService.classes;
  }

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
     private responsiveService:ResponsiveValueService) {
    this.contactPosition = captionState.ContactPos + this.firstPages;

  }
  @HostListener('window:resize', ['$event'])
  updateBodyTitleResponsiveState():void{
    this.responsiveService.getResponsiveFormat();
  }

  ngOnInit(): void {
    this.GetCaptionStateByPage = new Map<number, CaptionState>(
      this.captionStates.states.map(
        (caption: CaptionState, i: number) =>
          [i + this.firstPages, caption]
      )
    );
    this.updateTextByPage();
    this.keepTrackScroll();
  }

  public keepTrackScroll(): void {
    this.serviceScrollService.keepTrackScroll().subscribe(
      async targetPage => {
        if (targetPage != this.page) {
          this.transition = this.updateTransitionPage(targetPage);
          this.page = targetPage;
          this.updateTextByPage();
          this.ref.detectChanges();
        }
      }
    );
  }
  public updateTextByPage(): void {
    this.text = this.GetCaptionStateByPage.get(this.page)?.text ?? "";
  }
  public updateTransitionPage(targetPage: number) {
    let index = Math.min(targetPage, this.page, this.captionStates.transition.length - 1);
    return this.captionStates.transition[index];
  }
  public getAnimationParamter() {
    return new AnimationPatameter(this.transition).toPlainObj();
  }

}