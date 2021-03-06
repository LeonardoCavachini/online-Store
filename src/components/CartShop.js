import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartShopIcon from '../image/cartShopIcon.png';
import '../App.css';

export default class CartShop extends Component {
  constructor() {
    super();
    this.iconCart = this.iconCart.bind(this);
  }

  iconCart() {
    let local = JSON.parse(localStorage.cart);
    let numShop = local.map((el) => el.amount)
      .reduce((acum, item) => acum + item);
    return numShop;
  }

  render() {
    return (
      (localStorage.cart)
        ? (
          <div>
            <Link data-testid="shopping-cart-button" to="/Cart">
              <img src={ cartShopIcon } alt="cart" />
            </Link>
            <p data-testid="shopping-cart-size" className="leo">{this.iconCart()}</p>
          </div>
        )
        : (
          <div>
            <Link data-testid="shopping-cart-button" to="/Cart">
              <img src={ cartShopIcon } alt="cart" />
            </Link>
          </div>
        )
    );
  }
}
