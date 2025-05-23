import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <h1>Hello World</h1>
      <p>Welcome to your landing page!</p>
    </main>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f2f5;
      font-family: Arial, sans-serif;
    }

    .container {
      text-align: center;
      padding: 2rem;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
export class AppComponent {
  title = 'Hello World App';
} 