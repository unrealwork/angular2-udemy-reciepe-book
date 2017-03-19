import {Component, OnInit, Input} from '@angular/core';
import {Ingridient} from '../shared/ingridient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingridient[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }


}
