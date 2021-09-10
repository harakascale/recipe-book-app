
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  private  recipes: Recipe[]

  // recipeSelected = new Subject<Recipe>();
//  private  recipes: Recipe[] = [
//     new Recipe('A Test Recipe', 'This is simple a test', '../../../assets/image/pizza.jpg',[
//       new Ingredient('Meat', 10),
//       new Ingredient('Dough', 1)
//     ]),
//     new Recipe('Another Test Recipe', 'This is simple a test', '../../../assets/image/pizza.jpg',[
//       new Ingredient('Meat', 20),
//       new Ingredient('Meat', 10),
//     ])
//   ];


  constructor(private slService:ShoppingListService){}

  setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
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

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index : number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {

    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }


}
