import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf, ApplicationRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import {
  MatCardModule, MatToolbarModule,
  MatButtonModule, MatGridListModule
} from '@angular/material';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { BioComponent } from './speakers/bio/bio.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent,
    SpeakersListComponent,
    BioComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {
  constructor( @Optional() @SkipSelf() applicationRef: ApplicationRef) {
    console.log('PARENT MODULE', applicationRef);
    // if (parentModule) {
    //   throw new Error(
    //     'BrowserModule is already loaded. Import it in the AppModule only');
    // }
  }

  ngDoBootstrap(applicationRef: ApplicationRef) {
    console.log('APPLICATION REFERENCE', applicationRef, applicationRef.componentTypes, applicationRef.components, applicationRef.viewCount);
    if (!applicationRef.viewCount) {
      applicationRef.bootstrap(AppComponent);
      console.log(applicationRef.viewCount);
    }
  }
}
