import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const [searchStr, setSearchStr] = useState('');
  return (
          <Form
            className="flex-grow-1 d-flex"
            role="search"
            onSubmit={e => {
              e.preventDefault();
              props.onSearch(searchStr);
            }}
          >
            <Form.Group className="flex-grow-1" controlId="search">
              <Form.Control
                className={styles.TextField}
                type="search"
                placeholder="Ciudades..."
                value={searchStr}
                onChange={e => void setSearchStr(e.target.value)}
              />
            </Form.Group>
            <Button className="ms-2" variant="outline-light" type="submit">
              Agregar
            </Button>
          </Form>
  );
};

export default SearchBar;
