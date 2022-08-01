import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  page:number=0;
  constructor (private serviceScrollService: ServiceScrollService,
    private ref: ChangeDetectorRef) {
      
  }
 

  ngOnInit(): void {
    this.serviceScrollService.keepTrackScroll().subscribe(
      async value=>{
        this.page=value;
      }
    );
  }

}
