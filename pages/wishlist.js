import React from 'react';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { useGlobal} from '../src/context/GlobalContext';
import WishListItem from '../components/WishListItem';


export default () => {

  const [ state, dispatch ] = useGlobal();

    return (
        <Container maxWidth="md">
            <h1>Your shopping cart:</h1>
            <Grid container spacing={1} alignItems="stretch">
              {!state.wishlist.length && <h2>Nothing in your WishList!</h2>}   
              { state.wishlist.map((product, index) => <WishListItem key={index} product={product} /> )}
            </Grid>
        </Container>
    )
}
