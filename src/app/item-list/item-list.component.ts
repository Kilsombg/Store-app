import { Component, Input } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css',
  '../../assets/styles/item-list-grid.css']
})
export class ItemListComponent {
@Input() items: Item[];

constructor(public itemsService: ItemsService){
}

public onSubmit(form: any){
  // this.itemService.addOneItem(form);
  // this.items.at(0).description = 'changed';

  this.items = this.itemsService.getItems();
  var a = 3;
}
}
