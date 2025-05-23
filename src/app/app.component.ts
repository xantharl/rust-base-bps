import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <app-nav-bar [title]="title"></app-nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f0f2f5;
    }
  `]
})
export class AppComponent {
  title = 'Rust Base Blueprints';
} 