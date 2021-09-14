// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs";
// import { DataStorageService } from "src/app/shared/data-storage.service";
// import { Recipe } from "../recipe.model";
// import { RecipeService } from "../recipe.service";

// @Injectable({providedIn: 'root'})
// export class RecipeResolverService implements Resolve<Recipe[]> {

//   constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){}


//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const recipes = this.recipeService.getRecipes();

//     if(recipes.length === 0){
//       return this.dataStorageService.fetchRecipes();
//     } else {
//       return recipes;
//     }

//   }
// }

import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from "../recipe.model";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { RecipeService } from '../recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
