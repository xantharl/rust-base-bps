import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlueprintImageService {
  private readonly placeholderImage = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <!-- Background grid -->
      <defs>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2c2e33" stroke-width="0.5"/>
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)"/>
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#373a40" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Main background with grid -->
      <rect width="100%" height="100%" fill="#25262b"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      
      <!-- Octagonal structure -->
      <g transform="translate(50,50)">
        <!-- Outer octagon -->
        <path d="M 150,0 L 250,40 L 300,150 L 250,260 L 150,300 L 50,260 L 0,150 L 50,40 Z" 
              fill="none" stroke="#4dabf7" stroke-width="2"/>
        
        <!-- Inner structure -->
        <path d="M 150,50 L 220,80 L 250,150 L 220,220 L 150,250 L 80,220 L 50,150 L 80,80 Z" 
              fill="none" stroke="#4dabf7" stroke-width="1.5"/>
        
        <!-- Central chamber -->
        <circle cx="150" cy="150" r="40" fill="none" stroke="#4dabf7" stroke-width="1.5"/>
        <text x="150" y="155" text-anchor="middle" fill="#4dabf7" font-size="8" font-family="monospace">CENTRAL</text>
        
        <!-- Airlocks -->
        <g>
          <rect x="0" y="140" width="30" height="20" fill="none" stroke="#4dabf7" stroke-width="1"/>
          <rect x="270" y="140" width="30" height="20" fill="none" stroke="#4dabf7" stroke-width="1"/>
          <rect x="140" y="0" width="20" height="30" fill="none" stroke="#4dabf7" stroke-width="1"/>
          <rect x="140" y="270" width="20" height="30" fill="none" stroke="#4dabf7" stroke-width="1"/>
        </g>
        
        <!-- Storage areas -->
        <g>
          <rect x="80" y="80" width="40" height="40" fill="none" stroke="#4dabf7" stroke-width="1"/>
          <rect x="180" y="80" width="40" height="40" fill="none" stroke="#4dabf7" stroke-width="1"/>
          <rect x="80" y="180" width="40" height="40" fill="none" stroke="#4dabf7" stroke-width="1"/>
          <rect x="180" y="180" width="40" height="40" fill="none" stroke="#4dabf7" stroke-width="1"/>
        </g>
        
        <!-- Connecting corridors -->
        <g stroke="#4dabf7" stroke-width="1">
          <line x1="50" y1="150" x2="110" y2="150"/>
          <line x1="190" y1="150" x2="250" y2="150"/>
          <line x1="150" y1="50" x2="150" y2="110"/>
          <line x1="150" y1="190" x2="150" y2="250"/>
        </g>
      </g>
    </svg>
  `)}`;

  getPlaceholderImage(): string {
    return this.placeholderImage;
  }
} 