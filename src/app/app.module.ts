import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaptionComponent } from './components/caption/caption.component';
import { ContactComponent } from './components/contact/contact.component';
import { CaptionDescriptionComponent } from './components/caption-description/caption-description.component';
import { FaIconLibrary,FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter as farTwitter } from '@fortawesome/free-brands-svg-icons';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { CaptionSectionComponent } from './components/caption-section/caption-section.component';
import { TittleComponent } from './components/tittle/tittle.component';
import { CaptionSubtittleComponent } from './components/caption-subtittle/caption-subtittle.component';


@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    ContactComponent,
    CaptionDescriptionComponent,
    ContactInfoComponent,
    CaptionSectionComponent,
    TittleComponent,
    CaptionSubtittleComponent
    
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
    library.addIcons(farTwitter);
  }
  
}
