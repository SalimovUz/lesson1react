import searchIcon from "../../assets/search-icon.svg"
import basket from  "../../assets/basket-icon.svg"
// import "./header.scss"

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar__left">
          <h1>UI.desk</h1>
        </div>

        <div className="navbar__center">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="navbar__right">
          <img src={searchIcon} alt="Search Icon" />
          <img src={basket} alt="Basket Icon" />
          <button className="btn__nav">Order Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
