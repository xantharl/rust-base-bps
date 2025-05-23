import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Create</h1>
      <p>Create content will go here</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      margin-top: 4rem;
    }
  `]
})
export class CreateComponent {} 