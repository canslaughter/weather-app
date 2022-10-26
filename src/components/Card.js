import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const translations = {
  'fog': 'neblina',
  'clear sky': 'despejado',
  'overcast clouds': 'nublado',
  'light rain': 'lluvia ligera',
  'few clouds': 'ligeramente nuboso',
  'broken clouds': 'parcialmente nuboso',
  'light intensity drizzle': 'llovizna ligera',
}

const translate = str => translations[str] || str;

const Card = props => {
  const tooltipId = `card-img-tooltip-${props.id}`;
  const imgDesc = translate(props.img.description);
  return (
    <div className={styles.Main}>
      <header className={styles.Header}>
        <h6 className={styles.HeaderText}>{props.name}</h6>
          <button className={styles.CloseButton} onClick={props.onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
      </header>
      <hr className={styles.MainDivider} />
      <ul className={styles.List}>
        <li className={styles.ListItem}>
          <div>Mín</div>
          <div>{props.min} °C</div>
        </li>
        <li className={styles.ListItem}>
          <div>Máx</div>
          <div>{props.max} °C</div>
        </li>
        <div className={styles.ImgCard}>
          <div className={styles.ImgCardContent}>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id={tooltipId}>
                  {imgDesc}
                </Tooltip>
              }
            >
              <img
                className={styles.Img}
                alt={imgDesc}
                aria-describedby={tooltipId}
                src={`http://openweathermap.org/img/wn/${props.img.src}@2x.png`}
              />
            </OverlayTrigger>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Card;
