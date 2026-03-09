import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { Recipes } from './recipes/recipes';
import { RecipeList } from './recipes/recipe-list/recipe-list';
import { RecipeItem } from './recipes/recipe-list/recipe-item/recipe-item';
import { ShoppingList } from './shopping-list/shopping-list';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    Recipes,
    RecipeList,
    RecipeItem,
    ShoppingList,
    ShoppingEdit,
    RecipeDetail,
  ],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
