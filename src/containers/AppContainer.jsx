import { Container } from 'unstated';
import {
  loadRecipes,
  loadFavorites,
  loadRatings,
  storeFavorites,
  storeRatings,
  applyFavorites,
  applyRatings
} from '../services/recipes';

// I'm using a newish library called 'unstated' because I think
// redux would be really overkill for this small app
class AppContainer extends Container {
  state = {
    initialized: false,
    recipes: [],
    error: null
  };

  constructor() {
    super();
    this.initialize();
  }

  async initialize() {
    try {
      const recipes = await loadRecipes();
      this.setState({ recipes, initialized: true });
    } catch (error) {
      this.setState({ error, initialized: true });
    }
  }

  toggleFavorite(recipe) {
    let { recipes } = this.state;
    const favorites = loadFavorites();
    favorites[recipe.id] = recipe.favorite ? false : true;
    storeFavorites(favorites);
    recipes = applyFavorites(recipes);
    this.setState({ recipes });
  }

  rate(recipe, rating) {
    let { recipes } = this.state;
    const ratings = loadRatings();
    ratings[recipe.id] = rating;
    storeRatings(ratings);

    recipes = applyRatings(recipes);
    this.setState({ recipes });
  }
}

export default AppContainer;
