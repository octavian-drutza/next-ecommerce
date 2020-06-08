import React from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useGlobal } from "../src/context/GlobalContext";
import CartItem from "../components/CartItem";

export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="md">
      <h1>Your shopping cart:</h1>
      <Grid container spacing={1} alignItems="stretch">
        {!state.cart.length && <h2>Empty Cart!</h2>}
        {state.cart.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
