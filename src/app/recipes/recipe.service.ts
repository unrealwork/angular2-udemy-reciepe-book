import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {Ingridient} from '../shared';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Shnitzel', 'Very Tasty',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
        new Ingridient('French Fries', 2),
        new Ingridient('Pork meat', 1)
      ]),
    new Recipe('Summer Salad', 'Okayish',
      'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }
}
