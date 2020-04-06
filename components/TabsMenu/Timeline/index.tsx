import React, { useState, useCallback } from 'react';

// Components
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Others
import useStyles from './styles';

const Timeline = ({ me, timeline }: TimelineProps) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState<number>(0);

  const changeStep = useCallback((index: number) => setActiveStep(index), []);

  return (
    <>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.wrapper}
        nonLinear
      >
        {timeline.map((timelineEvent, index) => {
          const { startDate, endDate } = timelineEvent;
          return (
            <Step key={timelineEvent.order}>
              <StepButton onClick={() => changeStep(index)}>
                <>
                  <Typography variant="subtitle1">
                    {timelineEvent.title}
                  </Typography>
                  <Typography variant="body1" color="primary">
                    {timelineEvent.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${startDate} - ${endDate || 'Now'}`}
                  </Typography>
                </>
              </StepButton>
              <StepContent>
                <Typography variant="body1">
                  {timelineEvent.description}
                </Typography>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Typography variant="body2" className={classes.forMoreDetails}>
        For more details, go to my{' '}
        <Link
          href={me.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>{' '}
        page.
      </Typography>
    </>
  );
};

export interface TimelineProps {
  me: Me;
  timeline: Timeline;
}

export default Timeline;
