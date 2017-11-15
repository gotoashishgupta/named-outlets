import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { BioComponent } from './speakers/bio/bio.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      { path: 'home', component: HomeComponent },
      {
        path: 'speakers', component: SpeakersComponent,
        children: [
          { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
          { path: ':id', component: BioComponent, outlet: 'bio' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
