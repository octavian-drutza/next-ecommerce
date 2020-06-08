import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    CardMedia,
    Button,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
  },
  thumbnail: {
    height: 30,
    opacity: 0.3,
    [theme.breakpoints.up("md")]: {
      height: 50,
    },
  },
  active: {
    opacity: 1,
  },
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  ArrowButtons: {
    height: "100%",
    width: "50%",

  }
}));

const SlideShow = ({ slides = [], thumbnails = [], initialSlide = 0, }) => {
  const [ activeSlide, setActiveSlide ] = useState(initialSlide);
  const classes = useStyles();

  if (!slides.length || !thumbnails.length) {
    return null;
  }

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <CardMedia
            className={classes.media}
            image={slides[activeSlide].src}
            title={slides[activeSlide].alt}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h5" gutterBottom>
              {slides[activeSlide].alt}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              className = {classes.ArrowButtons}
              onClick={() =>
                setActiveSlide(
                  activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1
                )
              }
            >
              <ArrowBackIosIcon />
            </Button>
          </Grid>
          {thumbnails.map((thumbnail, index) => {
            return (
              <Grid item xs={2}>
                <CardMedia
                  className={`${classes.thumbnail} ${
                    activeSlide === index ? classes.active : " "
                  }`}
                  image={thumbnail.src}
                  title={thumbnail.alt}
                  onClick={() => setActiveSlide(index)}
                />
              </Grid>
            );
          })}
          <Grid item xs={2}>
            <Button
              className = {classes.ArrowButtons}
              onClick={() =>
                setActiveSlide(
                  activeSlide + 1 === slides.length ? 0 : activeSlide + 1
                )
              }
            >
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SlideShow;
