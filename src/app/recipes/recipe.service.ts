import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test only bla',
      'https://images.squarespace-cdn.com/content/v1/58615fc25016e161401f38ff/8dc84014-f4a7-4470-af43-ebe4818206bb/sweet+potato+lentil+soup.jpg?format=1500w',
      [new Ingredient('Meat', 2), new Ingredient('French Fries', 5)],
    ),
    new Recipe(
      'Another Recipe',
      'This one looks good',
      'https://hucklebeefarms.com/cdn/shop/articles/bourbon-street-chicken-ultimate-recipe-for-dinner-6885777.png?crop=center&height=400&v=1764867532&width=600',
      [new Ingredient('Buns', 1), new Ingredient('Fruit', 6)],
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

getRecipe(id: number)  {
  return this.recipes[id];
}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
