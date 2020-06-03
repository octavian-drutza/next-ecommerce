import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { useGlobal} from '../src/context/GlobalContext';
import ProductItem from '../components/ProductItem';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.up('md')]: {
      height: 300,
    },
  },
  card: {
    height: '100%',
  }
}), { name: 'ProductItem' });


export default () => {
  const classes = useStyles();
  const [ state, dispatch ] = useGlobal();

    return (
        <Container maxWidth="md">
            <h1>Products</h1>
            <Grid container spacing={1} alignItems="stretch">  
              { state.products.map((product, index) => <ProductItem key={index} product={product} /> )}
              </Grid>
        </Container>
    )
}
