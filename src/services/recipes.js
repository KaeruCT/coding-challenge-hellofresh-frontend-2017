// this service stores favorites and ratings using local storage
// but it could be easily swapped out for one that calls API endpoints instead

const FAVORITES_KEY = 'favorites';
const RATINGS_KEY = 'ratings';

export async function loadRecipes() {
  try {
    const res = await fetch('/recipes.json');
    let recipes = await res.json();
    recipes = applyRatings(recipes);
    recipes = applyFavorites(recipes);
    return recipes;
  } catch (err) {
    console.error('Error loading recipes', err);
    throw err;
  }
}

export function loadFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '{}');
}

export function loadRatings() {
  return JSON.parse(localStorage.getItem(RATINGS_KEY) || '{}');
}

export function storeFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function storeRatings(ratings) {
  localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
}

export function applyRatings(recipes) {
  const ratings = loadRatings();
  return recipes.map(r => {
    const rating = ratings[r.id];
    if (rating !== undefined) {
      r.rating = rating;
    }
    return r;
  });
}

export function applyFavorites(recipes) {
  const favorites = loadFavorites();
  return recipes.map(r => {
    r.favorite = !!favorites[r.id];
    return r;
  });
}
