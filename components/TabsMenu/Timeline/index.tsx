import React, { useState, useCallback } from 'react';

// Mui
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Others
import dataTimeline from 'app/data/timeline';
import dataMe from 'app/data/me';
import useStyles from './styles';

const Timeline = ({}: TimelineProps) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState<number>(0);

  const changeStep = useCallback((index: number) => setActiveStep(index), []);

  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      className={classes.wrapper}
      nonLinear
    >
      {dataTimeline.map((timelineEvent, i) => {
        const startDate: string = timelineEvent.startDate.format('MMM YYYY');
        const endDate: string = timelineEvent.endDate
          ? timelineEvent.endDate.format('MMM YYYY')
          : 'Now';
        return (
          <Step key={timelineEvent.order}>
            <StepButton onClick={() => changeStep(i)}>
              <>
                <span className={classes.timelineTitle}>
                  {timelineEvent.title}
                </span>
                <br />
                <span className={classes.timelineCompany}>
                  {timelineEvent.company}
                </span>
                <br />
                <span
                  className={classes.timelineDate}
                >{`${startDate} - ${endDate}`}</span>
              </>
            </StepButton>
            <StepContent>{timelineEvent.description}</StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
};

export interface TimelineProps {}

export default Timeline;
