import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsService } from './services/items.service';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
