
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  // recipeSelected = new Subject<Recipe>();
 private  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', '../../../assets/image/pizza.jpg',[
      new Ingredient('Meat', 10),
      new Ingredient('Dough', 1)
    ]),
    new Recipe('Another Test Recipe', 'This is simple a test', '../../../assets/image/pizza.jpg',[
      new Ingredient('Meat', 20),
      new Ingredient('Meat', 10),
    ])
  ];

  constructor(private slService:ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
  }


}
