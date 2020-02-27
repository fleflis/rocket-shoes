import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import logo from '../../assets/img/logo.svg';
import { Container, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize}
            &nbsp;itens
          </span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
