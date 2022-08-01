import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { changeIntroPosition, showIntro, vanishText } from '../../animations/animations';
import { AppComponent } from '../../app.component';
import { Caption, CaptionState, CaptionStateStyle } from '../../utils/caption-position/caption-position';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css'],
  animations: [
    // animation triggers go here
    showIntro,
    changeIntroPosition,
    vanishText
  ]
})

export class CaptionComponent implements OnInit {
  @Input() displayClass:String="";
  @Input() captionStates:Caption=new Caption([],0,0);
  @Input() isDescription:boolean=false;
  public get firsPosition():CaptionState|undefined{
    var value=(this.page-1)<0?0:this.page-1;
    return this.GetPosition(value);
    
  }
  public get secondPosition():CaptionState|undefined{
    return this.GetPosition(this.page);
    
  }
  
  text:String=""; 
  page:number=0;
  GetTextDictionary=new Map<number,CaptionState|undefined>([]);  

   constructor (private serviceScrollService: ServiceScrollService,
    private ref: ChangeDetectorRef) {
      
  }
 
   ngOnInit(): void {
    this.GetTextDictionary= new Map<number,CaptionState|undefined>(
      this.captionStates.states.map(
        (caption:CaptionState,i:number)=>
          [i,caption])
    );
    this.text=this.GetTextDictionary.get(this.page)?.text??"";
    this.serviceScrollService.keepTrackScroll().subscribe(
      async value=>{
        if(value<=1){
          this.page=value;
          this.text=this.GetTextDictionary.get(this.page)?.text??"";
        }
        if(this.page!=value){
          await this.delay(this.captionStates.delay*1000).then(
            ()=>{
              this.page=value;
              this.text=this.GetTextDictionary.get(this.page)?.text??"";
            });
          
          }
          this.ref.detectChanges();
        
      }
    );
    
  }
  private delay(ms:number){
    return new Promise(resolve=>setTimeout(resolve,ms));
  }
  private GetPosition(pos:number):CaptionState|undefined{
    return (this.captionStates.states.length>0)?
            this.captionStates.states[pos]
            :undefined
  }

}