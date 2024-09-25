import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { useDispatch } from "react-redux";
import { removeUser } from "../../actions/user-action";

const Header = ({ userInfo, totalItems, totalAmount, showCartAndLoginInfo }) => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const handleCart = e => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  const logOutUser = () => {
    dispatch(removeUser());
  };

  return (
    <header>
      <div className="container">
        <div className="brand">
          <img
            className="logo"
            src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
            alt="Veggy Brand Logo"
          />
        </div>

        {userInfo &&
          <div className="cart">
            <div className="user-info login-link">
              Welcome {userInfo} /
              <span className="link">
                <Link onClick={logOutUser} to="/">
                  Logout
                </Link>
              </span>
            </div>
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>Total items</td>
                    <td>:</td>
                    <td>
                      <strong>
                        {totalItems}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td>:</td>
                    <td>
                      <strong>
                        {totalAmount}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link to="/cart">
              {/* <button className="btn-cart" onClick={handleCart}> </button> */}
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                alt="Cart"
              />
              <span className="cart-count">
                {totalItems ? totalItems : ""}
              </span>
            </Link>
          </div>}

        {!userInfo && showCartAndLoginInfo &&
          <div className="login-link">
            <ul className="link">
              <li>
                <Link to="/login">Login/</Link>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>}
      </div>
    </header>
  );
};

Header.defaultProps = {
  showCartAndLoginInfo: false
};

export default Header;
