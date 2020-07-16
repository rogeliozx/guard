import React, { useEffect, useState, Fragment } from 'react';
import PictureCard from '../components/ui/PictureCard';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  mainContainer: {
    marginTop: '10rem',
  },
  containerButton: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: '7rem',
    marginRight: '25%',
    marginLeft: '25%',
    marginTop: '6rem',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: '7rem',
    marginRight: '25%',
    marginLeft: '25%',
  },
  confirmButton: {
    backgroundColor: '#4caf50',
  },
});

const Pictures = ({ picture, setReset }) => {
  const [urlReady, setUrlReady] = useState(false);
  useEffect(() => {
    picture.ine = picture.ine.replace(/\\/g, '\\\\');
    picture.ife = picture.ife.replace(/\\/g, '\\\\');
    setUrlReady(true);
  }, [urlReady, picture]);
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          {urlReady ? (
            <PictureCard
              url={'http://localhost:3001/api/get-picture?image=' + picture.ine}
              title='Foto de Cara'
            />
          ) : null}
          {urlReady ? (
            <PictureCard
              url={'http://localhost:3001/api/get-picture?image=' + picture.ife}
              title='Foto de IFE'
            />
          ) : null}
        </div>
        <div className={classes.containerButton}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={classes.confirmButton}
            onClick={() => {
              setReset(true);
            }}
          >
            Aceptar
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pictures;
