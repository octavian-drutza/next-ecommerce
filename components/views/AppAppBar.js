import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '../../src/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useGlobal } from "../../src/context/GlobalContext";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  langSelector: {
    marginLeft: theme.spacing(3),
    color: theme.palette.common.white, 
  },
  IconButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white, 
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar( props ) {
  const { locale, handleChangeLocale, classes } = props;
  const [state] = useGlobal();
  const cartCounter = state.cart.length;
  const wishListCounter = state.wishlist.length;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/products"
          >
            {"onepirate"}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/signin"
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/sign-up"
            >
              {"Sign Up"}
            </Link>
            <Link href="/cart">
              <IconButton
                className = {classes.IconButton}
                aria-label={`show ${cartCounter} qty`}
              >
                <Badge badgeContent={cartCounter} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link href="/wishlist">
              <IconButton
                className = {classes.IconButton}
                aria-label={`show ${wishListCounter} product`}
              >
                <Badge badgeContent={wishListCounter} color="secondary">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
            </Link>
            
            <Select
              className={classes.langSelector}
              disableUnderline
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={locale}
              onChange={handleChangeLocale}
            >
              <MenuItem value="ro">RO</MenuItem>
              <MenuItem value="ru">РУ</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
