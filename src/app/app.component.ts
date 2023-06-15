import { Component } from '@angular/core';
import { Item } from './item/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-web-app';

  items: Item[];

  constructor() {
    this.items = [
      new Item(
        'https://laptop.bg/system/images/381495/medium/lenovo_ideapad_1_15_82LX006FBM.png',
        'Lenovo IdeaPad 1 15"',
        "desc",
        519
      ),
      new Item(
        'https://laptop.bg/system/images/381495/medium/lenovo_ideapad_1_15_82LX006FBM.png',
        'Lenovo IdeaPad 1 15"',
        "desc",
        519
      ),
      ]
  }
}
