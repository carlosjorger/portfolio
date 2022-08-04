import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-twitter-contact',
  templateUrl: './twitter-contact.component.html',
  styleUrls: ['./twitter-contact.component.css']
})
export class TwitterContactComponent implements OnInit {

  constructor(library: FaIconLibrary) { 
    library.addIcons(faTwitter);
  }

  ngOnInit(): void {
  }

}
