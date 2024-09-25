import React from 'react';
import HeaderContainer from './headerContainer';
import ProductContainer from './product-list-container';
import Footer from '../components/common/footer';

const App = () => {
    return (
        <div>
        <HeaderContainer />
        <ProductContainer></ProductContainer>
        <Footer />
        </div>
    );
}

export default App;

