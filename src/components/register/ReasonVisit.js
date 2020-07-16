import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup({ createVisit }) {
    
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    createVisit(event.target.value);
  };

  return (
    <Fragment>
      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend'>Razon de visita</FormLabel>
        <RadioGroup
          aria-label='Razon de visita'
          name='reason'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value='Visita'
            control={<Radio color='primary' />}
            label='Visita'
          />
          <FormControlLabel
            value='Servicio'
            control={<Radio color='primary' />}
            label='Servicio'
          />
          <FormControlLabel
            value='Oxxo'
            control={<Radio color='primary' />}
            label='Oxxo'
          />
        </RadioGroup>
        <FormHelperText>Seleccione la razon de la visita</FormHelperText>
      </FormControl>
    </Fragment>
  );
}
