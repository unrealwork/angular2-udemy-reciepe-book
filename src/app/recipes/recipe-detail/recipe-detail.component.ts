import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {


  private subscription: Subscription;
  private recipeIndex;
  selectedRecipe: Recipe;

  constructor(private router: Router,
              private shoppingListService: ShoppingListService,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['recipes']);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
}
