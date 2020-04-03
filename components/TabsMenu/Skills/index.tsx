import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

// Others
import dataSkills from 'src/data/skills';
import useStyles from './styles';

const Skills = ({}: SkillsProps) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="flex-start">
      <Grid item md={3} className={classes.columnSpacing}>
        <Typography variant="subtitle1">Frontend</Typography>
        {dataSkills.frontend.map((skill) => (
          <div key={skill.name} className={classes.skillWrapper}>
            <Typography variant="body1" className={classes.skillName}>
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              color="primary"
              value={skill.value}
            />
          </div>
        ))}
      </Grid>
      <Grid item md={3}>
        <Typography variant="subtitle1">Backend</Typography>
        {dataSkills.backend.map((skill) => (
          <div key={skill.name} className={classes.skillWrapper}>
            <Typography variant="body1" className={classes.skillName}>
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              color="primary"
              value={skill.value}
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export interface SkillsProps {}

export default Skills;
