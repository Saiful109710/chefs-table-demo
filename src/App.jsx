import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import OurRecipees from "./components/OurRecipees/OurRecipees"
import Recipes from "./components/Recipes/Recipes"
import Sidebar from "./components/Sidebar/Sidebar"


const App = () => {
    const [recipesQuee,setRecipesQuee] = useState([]);
    const [preparingRecipe,setPreparingRecipe] = useState([]);
    const [totalTime,setTotalTime] = useState(0);
    const [totalCalory,setTotalCalory] = useState(0)

    const handleRecipesQuee =(recipe)=>{
        const existRecipe = recipesQuee.find((previousRecipe)=>previousRecipe.recipe_id === recipe.recipe_id)
        if(!existRecipe){
            setRecipesQuee([...recipesQuee,recipe])
        }else{
            alert("the recipe already existed in quee")
        }
       
    }

    const handlePreparingRecipeAndRemove =(id)=>{
          const deleteRecipe = recipesQuee.find((recipe)=>recipe.recipe_id === id);
          setPreparingRecipe([...preparingRecipe,deleteRecipe]);
          const updatedRecipeQuee = recipesQuee.filter((recipe)=>recipe.recipe_id !== id)
          setRecipesQuee(updatedRecipeQuee); 
    }

    const calculateTotalTimeAndCalory = (time,calory)=>{
            setTotalTime(totalTime + time);
            setTotalCalory(totalCalory+calory)
    }
    console.log(totalTime,totalCalory)

   
    
  return (
    <div className="container mx-auto px-4">
        {/* Header */}
            <Header></Header>
        {/* Banner */}
        <Banner></Banner>
        {/* Our Recipes Section */}
        <OurRecipees></OurRecipees>
        {/* Recipe Cards section */}
        <section className="flex flex-col md:flex-row gap-6 ">
          {/*card section */}
            <Recipes handleRecipesQuee={handleRecipesQuee}></Recipes>
          {/* sidebar */}
          <Sidebar recipesQuee={recipesQuee}
           handlePreparingRecipeAndRemove={handlePreparingRecipeAndRemove}
            preparingRecipe={preparingRecipe}
            calculateTotalTimeAndCalory={calculateTotalTimeAndCalory}
            totalTime={totalTime}
            totalCalory={totalCalory}
            ></Sidebar>
        </section>
    </div>
  )
}

export default App
