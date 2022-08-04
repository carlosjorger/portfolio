import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { showContacts } from 'src/app/animations/animations';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  animations: [
    // animation triggers go here
    

  ]
})
export class ContactInfoComponent implements OnInit {
  @Input() icon:IconDefinition=faGithub;
  @Input() url:string="";
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
