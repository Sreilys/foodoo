import React, {useState, useEffect} from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMealsHandler = async () => {
      const response = await fetch('https://api.npoint.io/ed11c3461df66e3bded5');
      if(!response.ok) {
        throw new Error('Something went wrong');
      }
      const fetchedMealsData = await response.json();
      setMeals(fetchedMealsData.data);
      setIsLoading(false);
    };

    fetchMealsHandler().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
    
  }, []);

  if (isLoading) {
    return <section className={classes['meals-loading']}><p>Loading...</p></section>
  }

  if (error) {
    return <section className={classes['meals-error']}><p>Sorry: {error}</p></section>
  }
  
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map(meal => (
            <MealItem 
              key={meal.id}
              id={meal.id}
              name={meal.name} 
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;


