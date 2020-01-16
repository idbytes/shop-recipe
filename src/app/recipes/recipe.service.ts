import {Recipe} from '../recipes/recipe.model';
import {EventEmitter} from "@angular/core";
import {Ingredient} from '../shared/ingredient.model'

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Chicken Skillet',
      'Pasta and Chicken with white sauce and herbs',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
      [
        new Ingredient('Meat',1),
        new Ingredient('Pasta', 1)
      ]
    ),
    new Recipe('Chicken Piccata',
      ' Laced with lemon and simmered in white wine',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbaMneak7CHYlpLb3I2iz_ieEmnFupULacOr3mkb_dVPjO7VAMg&s',
      [
        new Ingredient('Chicken Breast',1),
        new Ingredient('Lemon', 1),
        new Ingredient('Garlic',2)
      ]
    )
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
