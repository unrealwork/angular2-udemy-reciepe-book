import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingridient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  ngOnChanges(changes): void {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = new Ingredient(null, null);
    } else {
      this.isAdd = false;
    }
  }

  isAdd = true;
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) {
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (this.isAdd) {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.addItem(this.item);
    } else {
      this.shoppingListService.editItem(this.item, newIngredient);
    }
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.cleared.emit(null);
    this.isAdd = true;
  }
}
