import React from "react";
import { useState } from "react";

function Main() {
  const [userInput, setUserInput] = useState([]);

  function handleUserInput(formData) {
    let newIgredient = formData.get("ingredient");
    setUserInput((prev) => {
      return [...prev, newIgredient];
    });
  }

  const ingredientListItem = userInput.map((eachIngrdient) => (
    <li key={eachIngrdient}>{eachIngrdient}</li>
  ));

  return (
    <div className=" w-[80%] mx-auto">
      <form
        action={handleUserInput}
        className="flex flex-col justify-center items-center gap-4"
      >
        <input
          className="border border-text  mt-[3rem] w-[70%] rounded-sm p-[0.3rem]"
          type="text"
          name="ingredient"
          id=""
          placeholder="e.g. oregano"
        />
        <button className="bg-primary text-white py-1 px-5 rounded-sm">
          +Add ingredient
        </button>
      </form>
      <div>
        <div className="mt-12">
          <h2 className="text-2xl font-medium">Ingredients on hand:</h2>
          <ul className="list-disc font-light p-4">{ingredientListItem}</ul>
        </div>

        <div className="w-[100%] bg-[#f0efeb] rounded-sm mt-6 p-4">
          <div>
            <h3 className="font-medium text-[1.2rem]">Ready for a recipe?</h3>
            <p className="font-light">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button className="bg-secondary mt-2 p-1 rounded-sm py-1 px-3 text-white">Get a recipe</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
