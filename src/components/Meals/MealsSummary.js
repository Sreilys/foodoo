import mealsImage from '../../assets/meals.jpg';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food"/>
        <div className={classes.welcome}>
          <h2>Order food anytime & anywhere</h2>
          <p>
            Delicious food is waiting for you, we are always near to you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MealsSummary;
