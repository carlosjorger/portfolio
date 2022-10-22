import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { showContacts } from 'src/app/animations/animations';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  animations: [
    // animation triggers go here
    showContacts

  ]
})
export class ContactInfoComponent {
  @Input() icon:IconProp=faGithub as IconProp;
  @Input() url:string="url";
  constructor() { 
    
  }


}
