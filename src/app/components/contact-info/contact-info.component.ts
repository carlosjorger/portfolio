import { Component, Input, OnInit } from '@angular/core';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input() icon:IconDefinition=faGithub;
  @Input() url:string="";
  constructor() { 

  }

  ngOnInit(): void {
  }

}
