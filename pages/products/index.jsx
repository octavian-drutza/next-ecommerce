import React from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useGlobal } from "../../src/context/GlobalContext";
import ProductItem from "../../components/legacy/ProductItem";
import {FormattedMessage} from 'react-intl';


export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="md" >
      <h1><FormattedMessage id='products.page.title' /></h1>
      <Grid container spacing={1} alignItems="stretch">
        {state.products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
