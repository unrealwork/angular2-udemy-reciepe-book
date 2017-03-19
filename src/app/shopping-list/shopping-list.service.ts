import {Injectable} from '@angular/core';
import {Ingridient} from '../shared';

@Injectable()
export class ShoppingListService {
  private items: Ingridient[] = [];

  constructor() {
  }


  getItems() {
    return this.items;
  }

  addItems(ingredients: Ingridient[]) {
    for (const ingredient of ingredients) {
      this.items.push(ingredient);
    }
  }
}
