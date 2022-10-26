import Card from './Card';
import styles from './Cards.module.css';

const Cards = props => (
    <ul className={styles.Main}>
      {props.cities.map(c => (
        <li key={c.id} className={styles.Item}>
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            id={c.id}
            onClose={() => void props.removeCity(c.id)}
          />
        </li>
      ))}
    </ul>
  );

export default Cards;
