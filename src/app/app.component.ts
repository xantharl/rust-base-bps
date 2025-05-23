import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <app-nav-bar [title]="title"></app-nav-bar>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: var(--bg-primary);
    }

    .main-content {
      min-height: calc(100vh - 4rem);
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }
  `]
})
export class AppComponent {
  title = 'Rust Base Blueprints';
} 