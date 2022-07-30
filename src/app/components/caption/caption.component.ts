import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';
import { changeIntroPosition, showIntro } from '../../animations/animations';
import { AppComponent } from '../../app.component';
import { Caption, CaptionStyle } from '../../utils/caption-position/caption-position';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css'],
  animations: [
    // animation triggers go here
    showIntro,
    changeIntroPosition,
  ]
})

export class CaptionComponent implements OnInit {
  @Input() displayClass:String="";
  @Input() firstPosition:Caption | undefined;
  @Input() secondPosition:Caption | undefined;
  @Input() thirdPosition:Caption | undefined;
  text:String | undefined="";
  page:number=0;
  GetTextDictionary: Map<number,Caption| undefined>=new Map<number,Caption|undefined>([]);  

   constructor (private serviceScrollService: ServiceScrollService,
    private ref: ChangeDetectorRef) {
      
  }
 
  ngOnInit(): void {
    this.GetTextDictionary=new Map<number,Caption|undefined>([
      [0,this.firstPosition],
      [1,this.secondPosition],
      [2,this.thirdPosition]  
    ]);
    this.text=this.GetTextDictionary.get(this.page)?.text;
    this.serviceScrollService.keepTrackScroll().subscribe(
      value=>{
        this.page=value;
        this.text=this.GetTextDictionary.get(this.page)?.text;
        this.ref.detectChanges();
      }
    );
  }

}