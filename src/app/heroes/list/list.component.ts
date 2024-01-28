import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedHeroe?: string = '';
  public heroeNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];
  removeLastHeroe(): void {
    this.deletedHeroe = this.heroeNames.pop();
  }
}
