import "./footer.scss";
import paymentImg from "../../assets/footer-img.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <div>
            <h2>Categories</h2>
            <span>Women</span>
            <span>Men</span>
            <span>Kids</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div>
            <h2>Links</h2>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="right">
          <div>
            <h2>About</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor quam eget tortor lacinia, id sagittis sapien eleifend. Sed
              euismod quam sit amet dui ultricies, a convallis mauris eleifend.
              Sed non massa eget nunc eleifend congue. Vivamus eget leo ac lorem
              eleifend tristique.
            </span>
          </div>
          <div>
            <h2>Contact</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor quam eget tortor lacinia, id sagittis sapien eleifend. Sed
              euismod quam sit amet dui ultricies, a convallis mauris eleifend.
              Sed non massa eget nunc eleifend congue. Vivamus eget leo ac lorem
              eleifend tristique.
            </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="logo-div">
          <div className="logo">Easy Shop</div>
          <span>&copy; 2023 | Developed by Manoj Jayaraman, All Rights Reserved</span>
        </div>

        <div>
            <img src={paymentImg} alt="Powered By Stripe" className="footer-img"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
