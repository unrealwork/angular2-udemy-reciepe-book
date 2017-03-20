import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes';
import {ShoppingListComponent} from './shopping-list';
import {RECIPE_ROUTES} from './recipes/recipe-edit/recipe.routes';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
  {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
