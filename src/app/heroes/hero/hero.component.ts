import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 30;
  }
  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}