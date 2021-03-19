import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';
import Search from './components/Search';

function App() {
  const APP_ID = '555e6d4c';
  const APP_KEY = '2c81a4a193e358c462a134f9e4dc634e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('spaghetti');

  useEffect(() => {
    const fetchRecipes = () => {
      axios
        .get(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        .then((res) => {
          setRecipes(res.data.hits);
        });
    };
    fetchRecipes();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='p-4'>
      <h1 className='text-4xl text-center'>Food Recipes</h1>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div className='grid md:grid-cols-2 justify-items-center gap-2'>
        {recipes.map((recipe, index) => (
          <Recipe recipe={recipe.recipe} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
