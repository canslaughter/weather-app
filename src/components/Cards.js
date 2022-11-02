import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from './Card';

const Cards = props => (
  <Container maxWidth="lg">
    <Box
      component="ul"
      sx={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'grid',
        gap: t => t.spacing(2),
        gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${Card.minWidth}), 1fr))`,
      }}
    >
      {props.cities.map(c => (
        <Card
          key={c.id}
          component="li"
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => void props.removeCity(c.id)}
        />
      ))}
    </Box>
  </Container>
);

export default Cards;
