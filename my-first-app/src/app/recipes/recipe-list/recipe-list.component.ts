import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { Recipe } from './recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Hayagreeva Maddi', 'Hayagreeva Maddi Recipe -A Traditional Udupi Dessert', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZotp_a2fXoV_C_F7Uv8W8aByXn7s3mnMjnyKaz8VD1yMR-ZQoCA'),
    new Recipe('Butter Chiken', 'The easiest butter chiken recipe for you', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpY92ltp_q1lfCU32SE_nWBRaVAi8TgmvyFYrnHzC6BUXZlao4')

  ];
  

  constructor() { }
 
  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) { 
    this.recipeWasSelected.emit(recipe);
  }
}
