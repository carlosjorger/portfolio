import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CaptionStates } from '../core/constans/captions-states';

@Injectable({
  providedIn: 'root'
})
export class ServiceScrollService {

  pageNumber: number;
  realPage: number = 0;
  page: number = 0;
  scrollBufferWindow: number = 50;
  lastNavigationStartAt: number = 0;
  // current
  private subject = new Subject<number>();
  currentPage = this.subject.asObservable();
  constructor(private captionStates: CaptionStates) {
    this.pageNumber = captionStates.title.states.length + 1;
    document.addEventListener('scroll', ($event: Event) => {
      this.keepTrackScrollTask($event);
    });

  }
  keepTrackScrollTask($event: Event): void {
    if (Date.now() - this.lastNavigationStartAt > this.scrollBufferWindow) {
      const element = ($event.srcElement as HTMLHtmlElement).children[0]
      const scrollOffset = element.scrollTop;
      const scrollOffsetMax = document.body.offsetHeight - element.clientHeight;
      let relativeScrollOffset = scrollOffset / scrollOffsetMax;
      this.realPage = relativeScrollOffset * this.pageNumber;
      this.page = Math.floor(this.realPage);
      //there is not a this.pageNumber caption
      this.page = this.page >= this.pageNumber ? this.pageNumber - 1 : this.page;
      this.subject.next(this.page);
      this.lastNavigationStartAt = Date.now();

    }

  }
  keepTrackScroll(): Observable<number> {
    return this.subject.asObservable();
  }
}
