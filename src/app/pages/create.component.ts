import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Create Blueprint</h1>
      <p>Design tools coming soon...</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      margin-top: 4rem;
      min-height: calc(100vh - 4rem);
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }

    h1 {
      color: var(--text-primary);
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2rem;
    }

    p {
      color: var(--text-secondary);
      text-align: center;
      font-size: 1.1rem;
    }
  `]
})
export class CreateComponent {} 