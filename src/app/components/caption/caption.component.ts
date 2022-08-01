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
  @Input() positions:Caption[]|undefined;
  public get firsPosition():Caption|undefined{
    var value=(this.page-1)<0?0:this.page-1;
    return this.GetPosition(value);
    
  }
  public get secondPosition():Caption|undefined{
    return this.GetPosition(this.page);
    
  }
  
  text:String | undefined=""; 
  page:number=0;
  GetTextDictionary=new Map<number,Caption|undefined>([]);  

   constructor (private serviceScrollService: ServiceScrollService,
    private ref: ChangeDetectorRef) {
      
  }
 
  ngOnInit(): void {
    if(this.positions!=undefined){
      this.GetTextDictionary= new Map<number,Caption|undefined>(
        this.positions.map(
          (caption:Caption,i:number)=>
            [i,caption])
      );
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
  private GetPosition(pos:number):Caption|undefined{
    return (this.positions!=undefined&&this.positions.length>0)?
            this.positions[pos]
            :undefined
  }

}