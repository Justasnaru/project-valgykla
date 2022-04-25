import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Skanus ir šviežias maistas!</h2>
      <p>
        Pasirinkite savo mėgstamą patiekalą ir jau po kelių minučių mėgaukitės
        maistu nelaukdami eilėje!
      </p>
    </section>
  );
};

export default MealsSummary;
