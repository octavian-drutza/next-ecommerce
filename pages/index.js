import React from 'react';
import ProductCategories from '../components/views/ProductCategories';
import ProductSmokingHero from '../components/views/ProductSmokingHero';
import ProductHero from '../components/views/ProductHero';
import ProductValues from '../components/views/ProductValues';
import ProductHowItWorks from '../components/views/ProductHowItWorks';
import ProductCTA from '../components/views/ProductCTA';

export default () => {

    return (
        <>
          <ProductHero />
          <ProductValues />
          <ProductCategories />
          <ProductHowItWorks />
          <ProductCTA />
          <ProductSmokingHero />
        </>
      );
};