import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.up('xs')]: {
      width: '0%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '85%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '98%',
    },
    height: 'auto',
    objectFit: 'cover',
  },
}));
