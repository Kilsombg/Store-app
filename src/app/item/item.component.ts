import { Component, Input } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
@Input() item: Item;

constructor() {
    this.item = new Item(
      'https://laptop.bg/system/images/381495/medium/lenovo_ideapad_1_15_82LX006FBM.png',
      'Lenovo IdeaPad 1 15"',
      "desc",
      519
    );
  }
}
