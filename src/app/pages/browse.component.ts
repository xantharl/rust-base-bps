import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueprintImageService } from '../services/blueprint-image.service';

interface BlueprintTile {
  id: number;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Browse Blueprints</h1>
      <div class="blueprint-grid">
        <div *ngFor="let tile of blueprintTiles" class="blueprint-tile">
          <div class="tile-content">
            <div class="blueprint-image">
              <img [src]="tile.imageUrl" [alt]="tile.title">
            </div>
            <h3>{{ tile.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      margin-top: 4rem;
    }

    h1 {
      color: var(--text-primary);
      margin-bottom: 2rem;
      text-align: center;
    }

    .blueprint-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
      padding: 1rem;
      max-width: 1600px;
      margin: 0 auto;
    }

    .blueprint-tile {
      aspect-ratio: 1;
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
      cursor: pointer;
    }

    .blueprint-tile:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      border-color: var(--accent-primary);
    }

    .tile-content {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .blueprint-image {
      flex: 1;
      overflow: hidden;
      background: var(--bg-tertiary);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .blueprint-image img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: brightness(0.9) contrast(1.1);
    }

    h3 {
      margin: 0;
      padding: 1rem;
      text-align: center;
      background: var(--bg-secondary);
      color: var(--text-primary);
      font-size: 1rem;
      border-top: 1px solid var(--border-color);
    }

    @media (max-width: 1400px) {
      .blueprint-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (max-width: 1024px) {
      .blueprint-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 768px) {
      .blueprint-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .blueprint-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BrowseComponent {
  blueprintTiles: BlueprintTile[] = [];

  constructor(private blueprintImageService: BlueprintImageService) {
    this.blueprintTiles = Array(50).fill(null).map((_, index) => ({
      id: index + 1,
      title: `Blueprint ${index + 1}`,
      imageUrl: this.blueprintImageService.getPlaceholderImage()
    }));
  }
} 