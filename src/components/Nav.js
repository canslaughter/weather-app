import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import SearchBar from './SearchBar';

const Nav = props => (
  <>
    <div style={{height: '3.5em'}} />
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand className="py-2 my-0" as="h1">El Clima</Navbar.Brand>
        <SearchBar onSearch={props.addCity} />
      </Container>
    </Navbar>
  </>
);

export default Nav;
