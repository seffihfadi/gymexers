import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header className='flex justify-around items-center '>
      <Link to='/' className='text-[32px] bold text-[#d70469]'>Gym</Link>
      <a href="#exercises" className='text-[24px]'>exercises</a>
    </header> 
  );
}
 
export default Header;