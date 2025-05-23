import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <h1>Hello World</h1>
      <p>Welcome to your landing page!</p>
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
    }

    .container {
      text-align: center;
    }

    h1 {
      color: #1a73e8;
      margin-bottom: 1rem;
    }

    p {
      color: #5f6368;
    }
  `]
})
export class HomeComponent {} 