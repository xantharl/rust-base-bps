import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="nav-bar">
      <div class="nav-brand">{{ title }}</div>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/browse" routerLinkActive="active">Browse</a>
        <a routerLink="/create" routerLinkActive="active">Create</a>
      </div>
    </nav>
  `,
  styles: [`
    .nav-bar {
      background-color: white;
      padding: 1rem 2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .nav-brand {
      font-size: 1.25rem;
      font-weight: bold;
      color: #1a73e8;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: #5f6368;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .nav-links a:hover {
      color: #1a73e8;
    }

    .nav-links a.active {
      color: #1a73e8;
    }
  `]
})
export class NavBarComponent {
  @Input() title = 'My App';
} 