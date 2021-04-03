const getCocktails = async (search) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
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
