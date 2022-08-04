import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaptionComponent } from './components/caption/caption.component';
import { ContactComponent } from './components/contact/contact.component';
import { CaptionDescriptionComponent } from './components/caption-description/caption-description.component';


@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    ContactComponent,
    CaptionDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
