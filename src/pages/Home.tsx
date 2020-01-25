import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='main'>
      <div className='Menu'>
        <ButtonBases />
      </div>
    </div>
  );
};

export default Home;

const images = [
  {
    path: 'result',
    title: 'SEARCH SOUND',
    width: '50%'
  },
  {
    path: 'game',
    title: 'START GAME',
    width: '50%'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%'
    },
    image: {
      position: 'relative',
      height: '50vh',
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: '32vh'
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15
        },
        '& $imageMarked': {
          opacity: 0
        },
        '& $imageTitle': {
          border: '2px solid currentColor'
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity')
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity')
    }
  })
);

export function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image, index) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <Link to={'/' + image.path}>
            <span className={classes.imageSrc + ' Audd--image-' + index} />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component='span'
                variant='subtitle1'
                color='inherit'
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </Link>
        </ButtonBase>
      ))}
    </div>
  );
}
