const getCocktails = async (search) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  );
  const data = await response.json();
  const drinks = data.drinks;
  return drinks;
};

export default getCocktails;
