import { Component, OnInit } from '@angular/core';
import { Recipe

 } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "This is a test only bla", "https://images.squarespace-cdn.com/content/v1/58615fc25016e161401f38ff/8dc84014-f4a7-4470-af43-ebe4818206bb/sweet+potato+lentil+soup.jpg?format=1500w"),
    new Recipe('Another Recipe', "This one looks good", "https://hucklebeefarms.com/cdn/shop/articles/bourbon-street-chicken-ultimate-recipe-for-dinner-6885777.png?crop=center&height=400&v=1764867532&width=600")
  ];
  constructor(){

  }

  ngOnInit() {

  }
}
