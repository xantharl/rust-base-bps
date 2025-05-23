import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home.component';
import { BrowseComponent } from './app/pages/browse.component';
import { CreateComponent } from './app/pages/create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch((err: Error) => console.error(err)); 