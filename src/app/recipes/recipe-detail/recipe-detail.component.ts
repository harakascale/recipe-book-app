import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe :Recipe;
id: number;

  constructor(private recipeService: RecipeService,
    private route:ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("id is ==>" + this.id);
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList(){
      this.recipeService.addIngredientsToShppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){


    this.recipeService.deleteRecipe(this.id);
    this.dataStorageService.deleteRecipeFromBackEnd(this.id.toString()).subscribe();
    this.router.navigate(['/recipes']);
  }

}
