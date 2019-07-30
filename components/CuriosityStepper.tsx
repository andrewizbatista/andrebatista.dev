import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/styles';
// import { Theme } from '@material-ui/core/styles';

// Mui
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

// Others
import ICuriosity from 'app/entities/Curiosity';

// Styles
// const useStyles = makeStyles(({  }: Theme) => ({}));

const CuriosityStepper = ({ curiosities }: ICuriosityStepper) => {
  // const theme = useTheme();
  // const classes = useStyles(theme);

  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  return (
    <MobileStepper
      variant="progress"
      steps={curiosities.length}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === curiosities.length - 1}>
          Next
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          Back
        </Button>
      }
    />
  );
};

export interface ICuriosityStepper {
  curiosities: ICuriosity[];
}

export default CuriosityStepper;
