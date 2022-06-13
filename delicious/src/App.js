import './App.css';
import styled from 'styled-components';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter as Router} from 'react-router-dom';
import Search from './components/Search';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Delicious</Logo>
        </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </Router>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration:none;
  font-weight:400;
  font-size:1.5rem;
  font-family: 'Lobster Two',cursive;
`
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem;
}
`

export default App;
