import React, {useContext} from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';
import { v4 as uuidv4 } from 'uuid';

export default function RecipeEdit({recipe}) {
    const {handelRecipeChange,handelRecipeSelect} = useContext(RecipeContext)

    function handelChange(changes) {
        handelRecipeChange(recipe.id,{...recipe,...changes})
    }

    function handelIngredientChange(id,ingredient) {
        const newIngredient = [...recipe.ingredients]
        const index = newIngredient.findIndex(i => i.id === id)
        newIngredient[index] = ingredient

        handelChange({ingredients: newIngredient})
    }
    
    function handelIngredient() {
        const newIngredient = {
            id: uuidv4(),
            name: "",
            amount: ""
        }

        handelChange({ingredients: [...recipe.ingredients,newIngredient]})
    }

    function handelIngredientDelete(id) {
        handelChange({ingredients: recipe.ingredients.filter(i => i.id !== id)})
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="btn recipe-edit__remove-button" onClick={() => handelRecipeSelect(undefined)} >&times;</button>
            </div>

            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label" >Name</label>
                <input type="text" value={recipe.name} onChange={e => handelChange({name:e.target.value})} name="name" id="name" className="recipe-edit__input"></input>

                <label htmlFor="cookTime" className="recipe-edit__label" >Cook Time</label>
                <input type="text" value={recipe.cookTime} onChange={e => handelChange({cookTime:e.target.value})} name="cookTime" id="cookTime" className="recipe-edit__input"></input>

                <label htmlFor="servings" className="recipe-edit__label" >Servings</label>
                <input type="number" value={recipe.servings}  onChange={e => handelChange({servings:parseInt(e.target.value) || ''})} min="1" name="servings" id="servings" className="recipe-edit__input"></input>

                <label htmlFor="instructions" className="recipe-edit__label" >Instructions</label>
                <textarea name="instructions" value={recipe.instructions}  id="instructions" onChange={e => handelChange({instructions:e.target.value})} className="recipe-edit__input"></textarea>

            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit key={ingredient.id} handelIngredientChange={handelIngredientChange} handelIngredientDelete={handelIngredientDelete} ingredient={ingredient}  />
                ))}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary" onClick={() => handelIngredient()} >Add Ingredients</button>
            </div>
        </div>
    )
}
