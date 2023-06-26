import { Injectable } from "@angular/core";
import { Item } from "../item/item.model";
import { map } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ItemsService {
    public items : Item[];

    constructor(private http: HttpClient) {}

    public addOneItem(newItem: Item){
        console.log(newItem);
    }

    public loadAllItems() {
        return this.http.get<Item[]>('https://localhost:7041/api/laptop')
        .pipe(map(data => {
            this.items = data;
        }));
    }
}