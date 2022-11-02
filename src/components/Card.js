import Box from '@mui/material/Box';
import Main from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const Card = props => {
  return (
    <Box
      component={props.component || 'div'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Main
        sx={{
          flexBasis: Card.minWidth,
          flexShrink: 0,
          flexGrow: 1,
          maxWidth: `calc(${Card.minWidth} * 1.3)`,
        }}
      >
        <CardHeader
          title={props.name}
          action={
            <IconButton aria-label="cerrar" onClick={props.onClose}>
              <DeleteIcon />
            </IconButton>
          }
          sx={{
            '& .MuiCardHeader-content': {
              minWidth: 0,
            },
          }}
          titleTypographyProps={{
            noWrap: true,
          }}
        />
        <CardContent
          sx={{pt: 0}}
        >
          <WeatherDesc
            id={props.id}
            img={props.img.src}
            desc={props.img.description}
          />
          <TempTable
            min={props.min}
            max={props.max}
          />
        </CardContent>
      </Main>
    </Box>
  );
}
Card.minWidth = '26ch';

export default Card;

const WeatherDesc = props => {
  const desc = translate(props.desc);
  const id = `${props.id}-img-description`;
  const lineHeight = '1.2em';
  return (
    <Stack
      height="6ch"
      alignItems="center"
      justifyContent="center"
      direction="row"
      spacing={2}
      flexWrap="nowrap"
      paddingBottom={2}
    >
      <Paper
        elevation={1}
        component="img"
        sx={{
          bgcolor: '#b4b4c5',
          width: `calc(2 * ${lineHeight})`,
          height: `calc(2 * ${lineHeight})`,
        }}
        alt={desc}
        src={`https://openweathermap.org/img/wn/${props.img}@2x.png`}
        aria-describedby={id}
      />
      <Typography
        id={id}
        variant="body1"
        sx={{
          minWidth: 0,
          lineHeight,
          maxHeight: `calc(2 * ${lineHeight})`,
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word',
          overflow: 'hidden',
        }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};

const translate = str => translations[str] || str;

const translations = {
  'fog': 'Neblina',
  'mist': 'Niebla',
  'clear sky': 'Despejado',
  'overcast clouds': 'Nublado',
  'scattered clouds': 'Nubes dispersas',
  'light rain': 'Lluvia ligera',
  'light intensity shower rain': 'Lluvia ligera',
  'few clouds': 'Ligeramente nuboso',
  'broken clouds': 'Parcialmente nublado',
  'drizzle': 'Llovizna',
  'light intensity drizzle': 'Llovizna ligera',
  'light snow': 'Nevada ligera',
}

const TempTable = props => {
  return (
    <Table
      size="small"
      aria-label="temperaturas"
    >
      <TableHead>
        <TableRow>
          <HeadTableCell>Máx</HeadTableCell>
          <HeadTableCell>Mín</HeadTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <BodyTableCell> {props.min} °C </BodyTableCell>
          <BodyTableCell> {props.max} °C </BodyTableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const HeadTableCell = props => (
   <TableCell
     sx={{
       fontWeight: 'bold',
       border: 0,
       px: 1,
     }}
     align="center"
   >
     {props.children}
   </TableCell>
);

const BodyTableCell = props => (
   <TableCell
     sx={{
       border: 0,
       px: 1,
     }}
     align="center"
   >
     {props.children}
   </TableCell>
);
