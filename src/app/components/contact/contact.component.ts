import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faFacebook, faGithub, faLinkedin, faMeta, faTwitter,IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { showContacts } from 'src/app/animations/animations';
import { ServiceScrollService } from 'src/app/services/service-scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    showContacts
  ]
})
export class ContactComponent implements OnInit {

  page:number=0;
  faTwitter:IconDefinition=faTwitter
  faLinkedin:IconDefinition=faLinkedin
  faFacebook:IconDefinition=faFacebook
  faGithub:IconDefinition=faGithub      

  constructor (private serviceScrollService: ServiceScrollService,
    private ref: ChangeDetectorRef) {
      
  }
 

  ngOnInit(): void {
    this.serviceScrollService.keepTrackScroll().subscribe(
      async value=>{
        console.log(this.page)
        this.page=value;
      }
    );
  }

}
