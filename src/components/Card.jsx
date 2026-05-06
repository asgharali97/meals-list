import { useState, useEffect } from "react";
import { apiService } from "../service/apiService";
const Card = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await apiService.getMeals();
      const data = response;
      console.log(data.data);
      setMeals(data.data);
    }
    getMeals();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen py-12 px-8 bg-neutral-800 text-white grid grid-cols-3 gap-8">
        {meals.length === 0 ? (
          <div>Loading...</div>
        ) : (
          meals.map((item) => {
            return (
              <div
                key={item.id}
                className="min-h-62 w-full bg-neutral-700 border  border-neutral-600 rounded-xl cursor-pointer"
              > 
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="py-2 px-4">
                 <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">{item.strMeal}</h2>
                  <p className="text-sm text-neutral-400">{item.strCategory}</p>
                 </div>
                 <div className="flex justify-between items-center">
                  <a href={item.strYoutube} className="text-sm text-neutral-400 underline hover:text-neutral-200">Youtube link</a>
                  <a href={item.strSource} className="text-sm text-neutral-400 underline hover:text-neutral-200">Source link</a>
                 </div>
                 <p className="mt-4 text-sm text-neutral-300">{item.strInstructions.slice(0,250)}...</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Card;
