import { useState } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import AvailableDrinks from './AvailableDrinks';
import AvailableSoups from './AvailableSoups';
import AvailableDesserts from './AvailableDesserts';
import classes from './Meals.module.css';
import dishesImage from '../../assets/dishes.png';
import drinksImage from '../../assets/drinks.png';
import soupImage from '../../assets/soup.png';
import dessertImage from '../../assets/dessert.png';

const Meals = () => {
  const [isShowingMeals, setIsShowingMeals] = useState(true);
  const [isShowingDrinks, setIsShowingDrinks] = useState(false);
  const [isShowingSoups, setIsShowingSoups] = useState(false);
  const [isShowingDesserts, setIsShowingDesserts] = useState(false);

  const showMealsHandler = () => {
    setIsShowingDrinks(false);
    setIsShowingSoups(false);
    setIsShowingDesserts(false);
    setIsShowingMeals(true);
  };

  const showDrinksHandler = () => {
    setIsShowingMeals(false);
    setIsShowingSoups(false);
    setIsShowingDesserts(false);
    setIsShowingDrinks(true);
  };

  const showSoupsHandler = () => {
    setIsShowingMeals(false);
    setIsShowingDesserts(false);
    setIsShowingDrinks(false);
    setIsShowingSoups(true);
  };

  const showDessertsHandler = () => {
    setIsShowingMeals(false);
    setIsShowingDrinks(false);
    setIsShowingSoups(false);
    setIsShowingDesserts(true);
  };

  const mealTypeSelection = (
    <div>
      <img
        src={dishesImage}
        alt='Dishes'
        className={classes.png}
        onClick={showMealsHandler}
      />
      <img
        src={soupImage}
        alt='Soups'
        className={classes.png}
        onClick={showSoupsHandler}
      />
      <img
        src={drinksImage}
        alt='Drinks'
        className={classes.png}
        onClick={showDrinksHandler}
      />
      <img
        src={dessertImage}
        alt='Desserts'
        className={classes.png}
        onClick={showDessertsHandler}
      />
    </div>
  );

  return (
    <>
      <MealsSummary />
      <section className={classes.actions}>{mealTypeSelection}</section>
      {isShowingMeals && <AvailableMeals />}
      {isShowingDrinks && <AvailableDrinks />}
      {isShowingSoups && <AvailableSoups />}
      {isShowingDesserts && <AvailableDesserts />}
    </>
  );
};

export default Meals;
