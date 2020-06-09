import React from "react";
import {FormattedMessage} from 'react-intl';
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { useGlobal } from "../src/context/GlobalContext";
import Link from "../src/Link";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(
  (theme) => ({
    media: {
      height: 250,
      [theme.breakpoints.up("md")]: {
        height: 300,
      },
    },
    card: {
      height: "100%",
    },
  }),
  { name: "ProductItem" }
);

export default function CartItem({ product }) {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <Link href="/products/[product]" as={`/products/${product.id}`}>
            <CardMedia
              className={classes.media}
              image={product.image}
              title={product.name}
            />
          </Link>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography
              gutterBottom 
              variant="h5"
              component="h2"
              align="left"
              fontSize={30}
            >
              {product.price} $
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                fullWidth
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: "REMOVE_FROM_BAG",
                    payload: {
                      id: product.id,
                    },
                  });
                }}
              >
                <FormattedMessage id='product.button.remove' /><DeleteIcon />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                fullWidth
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: "REMOVE_FROM_BAG",
                    payload: {
                      id: product.id,
                    },
                  });

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
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
