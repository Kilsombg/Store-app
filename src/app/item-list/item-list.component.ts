import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css',
  '../../assets/styles/item-list-grid.css']
})
export class ItemListComponent implements OnInit{

constructor(public itemsService: ItemsService){
}
  ngOnInit(): void {
    this.itemsService.loadAllItems()
    .subscribe();
  }

public onSubmit(form: Item){
  this.itemsService.addOneItem(form);
}
}
