const getCocktails = async (method, search) => {
  let lookup;
  method === "filter" ? (lookup = "i") : (lookup = "s");
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${lookup}=${search}`
  );
  const data = await response.json();
  const drinks = data.drinks;
  return drinks;
};

const getCocktailsById = async (id) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  const cocktail = data.drinks;
  return cocktail;
};

export { getCocktails, getCocktailsById };
