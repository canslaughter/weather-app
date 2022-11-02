import {useRef} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DeleteLeftSrc from './delete-left-solid.svg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const SearchForm = props => {
  const searchRef = useRef(null);
  return (
    <Stack
      direction="row"
      spacing={1}
      component="form"
      role="search"
      onSubmit={e => {
        e.preventDefault();
        const node = searchRef.current;
        props.onSubmit(node.value);
        node.value = '';
      }}
    >
      <TextField
        inputProps={{
          sx: {
            '::-webkit-search-cancel-button': {
              WebkitAppearance: 'none',
              height: '1.5em',
              width: '1.5em',
              background: `url(${DeleteLeftSrc}) no-repeat 50% 50%`,
              backgroundSize: 'contain',
              opacity: 0,
              pointerEvents: 'none',
            },
            ':hover::-webkit-search-cancel-button': {
              opacity: 0.7,
              pointerEvents: 'all',
            },
          },
        }}
        inputRef={searchRef}
        id="search"
        label="Ciudad:"
        variant="filled"
        type="search"
        autoFocus
        fullWidth
      />
      {props.submitText
        ? (
          <Button
            type="submit"
            variant="contained"
            disableElevation
            sx={{flexShrink: 0}}
          >
            {props.submitText}
          </Button>
        ) : (
          <IconButton type="submit">
            {props.submitIcon}
          </IconButton>
        )
      }
    </Stack>
  );
};

export default SearchForm;
