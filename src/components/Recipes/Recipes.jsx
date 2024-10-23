import React, { useEffect, useState } from 'react'

const Recipes = ({handleRecipesQuee}) => {
    const [recipes,setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    
  return (
    <div className='md:w-2/3'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
       {
            recipes.map(recipe=>(
                <div key={recipe.recipe_id} className="card bg-base-100 border  drop-shadow-md ">
                <figure className='p-4'>
                    <img className='w-full h-56 rounded-2xl'
                    src={recipe.recipe_image}
                    alt="recipe image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold text-gray-800">{recipe.recipe_name}</h2>
                    <p className='text-gray-600 text-base'>{recipe.short_description}</p>
                    <h3 className='text-lg font-medium text-gray-700'>Ingredients: {recipe.ingredients.length}</h3>
                    <ul className='ml-8'>
                        {
                            recipe.ingredients.map((ingredient,index)=><li className='list-disc text-gray-600' key={index}>{ingredient}</li>)
                        }
                    </ul>
                    <div className='flex gap-6'>
                        <div className='flex items-center gap-2'>
                        <i className="fa-regular fa-clock text-2xl"></i>
                        <p>{recipe.preparing_time} minute</p>

                        </div>
                        <div className='flex items-center gap-2'>
                        <i className="fa-solid fa-fire-flame-curved"></i>
                        <p>{recipe.calories} calories</p>

                        </div>

                    </div>
                    <div className="card-actions mt-5">
                        <button onClick={()=>handleRecipesQuee(recipe)} className="btn bg-[#0BE58A] rounded-full px-8 text-gray-800 font-bold text-md">Want to Cook</button>
                    </div>
                </div>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default Recipes
