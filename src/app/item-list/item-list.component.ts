import { Component, Input } from '@angular/core';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css',
  '../../assets/styles/css-grid.css']
})
export class ItemListComponent {
@Input() items: Item[];
}
