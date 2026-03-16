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
import { FormsModule } from '@angular/forms';
import { Dropdown } from './shared/dropdown';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStart } from './recipes/recipe-start/recipe-start';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';

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
    Dropdown,
    RecipeStart,
    RecipeEdit,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), ShoppingListService],
  bootstrap: [App],
})
export class AppModule {}
