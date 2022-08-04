import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaptionComponent } from './components/caption/caption.component';
import { ContactComponent } from './components/contact/contact.component';
import { CaptionDescriptionComponent } from './components/caption-description/caption-description.component';
import { TwitterContactComponent } from './components/twitter-contact/twitter-contact.component';
import { FaIconLibrary,FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    ContactComponent,
    CaptionDescriptionComponent,
    TwitterContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) { 
    library.addIcons(faTwitter);
  }
  
}
