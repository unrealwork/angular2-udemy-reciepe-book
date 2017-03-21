import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Ingredient} from "../../shared/ingridient";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private subscription: Subscription;
  private recipeIndex: number;
  recipe: Recipe;
  isNew = true;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    let isNew = true;
    this.route.params.subscribe(
      (params) => {
        if (params.hasOwnProperty('id')) {
          this.recipeIndex = params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          this.isNew = false;
        } else {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    )
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = this.formBuilder.array([]);

    if (this.isNew) {

    } else {
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
      for (let item of this.recipe.ingredients) {
        recipeIngredients.push(this.formBuilder.group({
          name: [item.name, Validators.required],
          amount: [item.amount, [Validators.required, Validators.pattern("\\d+")]]
        }))
      }
    }
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    })
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe)
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onAddItem(name: string, amount: number) {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      this.formBuilder.group({
        name: [name, Validators.required],
        amount: [amount, [Validators.required, Validators.pattern("\\d+")]]
      })
    )
  }
}
