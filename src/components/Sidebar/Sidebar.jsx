import React from 'react'

const Sidebar = ({recipesQuee,
  handlePreparingRecipeAndRemove,
  preparingRecipe,
  calculateTotalTimeAndCalory,
  totalTime,
  totalCalory}) => {
  return (
    <div className='md:w-1/3 border-2 rounded-2xl text-gray-600 bg-base-100 p-2'>
       <div>
       <h2 className='border-b-2 mx-auto text-center font-medium text-2xl text-gray-800 pb-2'>Want to cook: {recipesQuee.length}</h2>
        <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      recipesQuee.map((recipe,index)=>(
                        <tr className="hover" key={index}>
                        <th>{index+1}</th>
                        <td>{recipe.recipe_name}</td>
                        <td>{recipe.preparing_time}</td>
                        <td>{recipe.calories} calories</td>
                        <td><button onClick={()=>{
                          handlePreparingRecipeAndRemove(recipe.recipe_id)
                          calculateTotalTimeAndCalory(recipe.preparing_time,recipe.calories)

                        }} className="btn btn-sm  bg-[#0BE58A] rounded-full  text-gray-700 font-[700] text-md">preparing</button></td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
        
        </div>
       </div>


        {/* currently cooking */}
        <div className='mt-10'>
        <h2 className='border-b-2 mx-auto text-center font-medium text-2xl text-gray-800 pb-2'>Want to cook: {preparingRecipe.length}</h2>
        <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      preparingRecipe.map((recipe,index)=>(
                        <tr className="hover" key={index}>
                        <th>{index+1}</th>
                        <td>{recipe.recipe_name}</td>
                        <td>{recipe.preparing_time}</td>
                        <td>{recipe.calories} calories</td>
                        
                      </tr>
                      ))
                    }
                     <tr>
                        <th></th>
                        <td></td>
                        <td>Total Time = {totalTime}</td>
                        <td>Total calories = {totalCalory}</td>
                        
                      </tr>
                  </tbody>
                </table>
        
        </div>
        </div>
    </div>
  )
}

export default Sidebar
