import { ChangeDetectorRef, Component, HostListener, Input, NgZone, OnInit, } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { getAnimationParameters, showContacts, showIntro } from '../../animations/animations';
import { AppComponent } from '../../app.component';
import { Caption, CaptionState, CaptionStateStyle, Transition } from '../../utils/caption-position/caption-model';
import { AnimationEvent } from "@angular/animations";
import { CaptionStates } from 'src/app/core/constans/captions-states';
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
  @Input() displayClass: String = "";
  @Input() captionStates: Caption = new Caption([]);
  private currentTransation: number = 0;
  protected maxWidth: number = 1450;
  protected minWidth: number = 400;
  public responsiveFontSize: number = 0;
  public responsiveTop: number = 0;

  protected FontSizescale: number = 2;
  protected TopScale: number = 0.5;
  text: String = "";
  page: number = 0;
  GetTextDictionary = new Map<number, CaptionState | undefined>([]);
  protected firstPages:number=1;
  public contactPosition:number;

  public get transition(): Transition {
    return this.captionStates.transition[this.currentTransation];
  }
  public get firsPosition(): CaptionState {
    return this.GetPosition((this.page >= this.captionStates.transition.length - 1) ?
      this.captionStates.transition.length - 1 :
      this.page);

  }

  public get secondPosition(): CaptionState {
    return this.GetPosition((this.page >= this.captionStates.transition.length - 1) ?
      this.captionStates.transition.length - 1 :
      this.page + 1);

  }
  public getAnimationParamter() {
    return getAnimationParameters(this.firsPosition,
      this.responsiveFontSize,
      this.responsiveTop,
      this.secondPosition,
      this.responsiveFontSize,
      this.responsiveTop,
      this.transition);
  }


  @HostListener('window:resize', ['$event'])
  public getResponsiveFontSize(): number {
    var captionStateStyle = this.firsPosition.captionStyle;
    var transformFontSize = this.firsPosition.captionStyle.fontSize * this.FontSizescale;
    var a = ((captionStateStyle.fontSize - transformFontSize) / (this.maxWidth - this.minWidth))
    this.responsiveFontSize = a * window.innerWidth +
      transformFontSize - this.minWidth * a;
    return this.responsiveFontSize;

  }
  @HostListener('window:resize', ['$event'])
  public getResponsiveTop(): number {
    var captionStateStyle = this.firsPosition.captionStyle;
    var transformTop = 30+(this.firsPosition.captionStyle.top-30) * this.TopScale;
    var a = ((captionStateStyle.top - transformTop) / (this.maxWidth - this.minWidth))
    this.responsiveTop = a * window.innerWidth +
      transformTop - this.minWidth * a;
    return this.responsiveTop;

  }

  constructor(private serviceScrollService: ServiceScrollService,
    private ref: ChangeDetectorRef,private captionState:CaptionStates) {
      this.contactPosition=captionState.ContactPos+this.firstPages;
  }
  ngOnInit(): void {
    this.GetTextDictionary = new Map<number, CaptionState | undefined>(
      this.captionStates.states.map(
        (caption: CaptionState, i: number) =>
          [i + this.firstPages, caption])
    );
    this.text = this.GetTextDictionary.get(this.page)?.text ?? "";
    this.serviceScrollService.keepTrackScroll().subscribe(
      async value => {
        if (value != this.page) {
          this.currentTransation = Math.min(value, this.page, this.captionStates.transition.length - 1);
          await this.delay((this.transition?.delay ?? 0) * 1000).then(
            () => {
              this.page = value;
              this.text = this.GetTextDictionary.get(this.page)?.text ?? "";
            });
          this.ref.detectChanges();
        }
      }
    );
    this.getResponsiveFontSize();
    this.getResponsiveTop();
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  protected GetPosition(pos: number): CaptionState {
    return this.captionStates.states[pos]
  }
}