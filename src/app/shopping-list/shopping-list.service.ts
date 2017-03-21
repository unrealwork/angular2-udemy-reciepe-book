import {Injectable} from '@angular/core';
import {Ingredient} from '../shared';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() {
  }


  getItems() {
    return this.items;
  }

  addItems(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      this.items.push(ingredient);
    }
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
