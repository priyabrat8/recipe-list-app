import React from 'react'

export default function RecipeIngredientEdit(props) {
    const {ingredient,handelIngredientChange,handelIngredientDelete} = props

    function handelChange(changes) {
        handelIngredientChange(ingredient.id,{...ingredient,...changes})
    }

    return (
        <>
            <input className="recipe-edit__input"  type="text" value={ingredient.name} onChange={(e) => handelChange({name: e.target.value})} />
            <input className="recipe-edit__input" type="text" value={ingredient.amount} onChange={(e) => handelChange({amount: e.target.value})}  />
            <button className="btn btn--danger" onClick= {() => handelIngredientDelete(ingredient.id)} >&times;</button>
        </>
    )
}
