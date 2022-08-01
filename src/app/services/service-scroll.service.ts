import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceScrollService {

  pageNumber:number=4;
  realPage:number=0;
  page:number=0;
  // current
  private subject= new Subject<number>();
  currentPage=this.subject.asObservable();
  constructor() {
    document.addEventListener('scroll',($event: Event)=>{
      this.keepTrackScrollTask($event);
    });

   }
   keepTrackScrollTask($event: Event): void {
    const element=($event.srcElement as HTMLHtmlElement).children[0]
    const scrollOffset=element.scrollTop;
    const scrollOffsetMax=document.body.offsetHeight-element.clientHeight;
    let relativeScrollOffset=scrollOffset/scrollOffsetMax;
    this.realPage=relativeScrollOffset*this.pageNumber;
    this.page=Math.floor(this.realPage);
    //there is not a this.pageNumber caption
    this.page=this.page>=this.pageNumber?this.pageNumber-1:this.page;
    this.subject.next(this.page);
	}
  keepTrackScroll():Observable<number>{ 
    return this.subject.asObservable();
  }
}