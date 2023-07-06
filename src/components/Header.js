import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header>
      <Link to='/'>LOGO</Link>
      <a href="#exercises">exercises</a>
    </header> 
  );
}
 
export default Header;