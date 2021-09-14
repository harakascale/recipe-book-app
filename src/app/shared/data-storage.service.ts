import { Injectable } from "@angular/core";
import { HttpClient, HttpParams }from '@angular/common/http';
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import {  map, tap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {


  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    ) {}

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    console.log('This is the recipe been sent ===>' + recipes)
    this.http.put('https://angular-projects-cc0ab-default-rtdb.firebaseio.com/recipes.json', recipes)
    .subscribe(response =>{
      console.log(response);
    })
  }

  fetchRecipes() {
        return this.http.get<Recipe[]>(
          'https://angular-projects-cc0ab-default-rtdb.firebaseio.com/recipes.json',

        ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        console.log("This is fetch recipes====" + recipes);
        this.recipeService.setRecipes(recipes);
      })
    );
  }


    deleteRecipeFromBackEnd(index: string){
    return this.http.delete('https://angular-projects-cc0ab-default-rtdb.firebaseio.com/recipes.json/'+ index)
  }
}
