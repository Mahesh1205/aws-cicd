import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/common/header';

const HeaderContainer = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalItems = useSelector(state => state.cart.addedItems.length);
  const userData = useSelector(state => state.user.userData || {});
  return (<Header showCartAndLoginInfo={true} userInfo={userData.userName} totalAmount={totalAmount} totalItems={totalItems} />);
};

export default HeaderContainer;
