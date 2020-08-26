import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { Token } from '@angular/compiler';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, 
             private recipeService: RecipeService,
             private authService: AuthService) {}

  storeRecipes() {
    return this.http.put('https:gs://ng-recipe-book-7407e.appspot.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getIdToken();
    this.http.get('https:gs://ng-recipe-book-7407e.appspot.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
