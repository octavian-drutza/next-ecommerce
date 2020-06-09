import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import { withRouter } from 'next/router';
import { Grid, Container, CardMedia, CircularProgress, Button } from '@material-ui/core';
import { useGlobal } from '../../src/context/GlobalContext';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel';
import SlideShow from '../../components/SlideShow';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";



function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 250,
    [theme.breakpoints.up("md")]: {
      height: 500,
      width: 'auto',
  }},
  buttons: {
    width: 150,
    marginBottom: 5,
  }
}));

const ProductPage = (props) => {
  const [ { products }, dispatch] = useGlobal();
  const product = products.find(item => item.id === props.router.query.product) 



  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return product ? (
    <Container maxWidth="md">
      <h1>Product Detailed</h1>
      <Grid container spacing={1} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <SlideShow slides={product.images} thumbnails={product.images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>{product.name}</h2>
          <ul>
            <li>
              <h4>Pieces: {product.details.pieceQty}</h4>
            </li>
            <li>
              <h4>Age: {product.details.age}+</h4>
            </li>
            <li>
              <h4>In Stock: {product.details.inStock}</h4>
            </li>
            <li>
              <h4>Shipment Cost: {product.details.shipmentPrice} $</h4>
            </li>
          </ul>
          <div>
            <span>
              <h3> Price: {product.price} $</h3>
            </span>
            <div>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                width="auto"
                className={classes.buttons}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }
                  dispatch({
                    type: "ADD_TO_BAG",
                    payload: {
                      id: product.id,
                      qty: 1,
                    },
                  });
                }}
              >
                <FormattedMessage id='product.button.buy' /><ShoppingCartIcon />
              </Button>
            </div>
            <div>
              <Button
                size="small"
                color="primary"
                variant="contained"
                fullWidth
                className={classes.buttons}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: {
                      id: product.id,
                      qty: 1,
                    },
                  });
                }}
              >
                <FormattedMessage id='product.button.movetowish' /><FavoriteBorderIcon />
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            centered
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Information" {...a11yProps(1)} />
            <Tab label="Reviews" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <TabPanel value={value} index={0}>
          {product.description}
        </TabPanel>
        <TabPanel value={value} index={1}>
          No additional information
        </TabPanel>
        <TabPanel value={value} index={2}>
          No Reviews
        </TabPanel>
        <Grid item xs={12}>
          Related Products
        </Grid>
      </Grid>
    </Container>
  ) : (
    <CircularProgress />
  );
};

export default withRouter(ProductPage)