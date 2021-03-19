const Recipe = ({ recipe }) => {
  return (
    <div className='border-2 max-w-md border-black mt-4 relative'>
      <h1 className='text-2xl text-center border-b-2 border-black py-2'>
        {recipe.label}
      </h1>
      <img
        src={recipe.image}
        alt=''
        className='w-60 mx-auto my-4 rounded-lg shadow'
      />

      <div className='m-3'>
        <p className='font-bold text-lg'>Ingredients:</p>
        <ol>
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing.text}</li>
          ))}
        </ol>
      </div>
      <p className='m-3'>
        <span className='font-bold'>Calories:</span>{' '}
        {Math.ceil(recipe.calories)} kcal
      </p>
    </div>
  );
};

export default Recipe;
