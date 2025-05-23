import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <h1>Welcome to Rust Base Blueprints</h1>
      <p>Explore and create base designs for your next build</p>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 4rem);
      padding: 2rem;
      margin-top: 4rem;
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }

    h1 {
      color: var(--text-primary);
      margin-bottom: 1rem;
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      color: var(--text-secondary);
      font-size: 1.2rem;
      text-align: center;
    }
  `]
})
export class HomeComponent {} 