import logo from '../../assets/logo.svg';
import "./header.scss";

const Header = () => {
  return (
    <div data-testid='headerWrapper' className='headerWrapper'>
      <div className='headerComponents' tabIndex={0}>
        <a href='/'>
          <img data-testid='logo' src={logo} alt='logo' />
        </a>
      </div>
    </div>
  );
};

export default Header;