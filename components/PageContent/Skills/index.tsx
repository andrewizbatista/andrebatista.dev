import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

// Others
import useStyles from './styles';

const Skills = ({ skills }: SkillsProps) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="flex-start">
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.columnSpacing}>
        <Typography variant="subtitle1">Frontend</Typography>
        <SkillSection skills={skills.frontend} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.columnSpacing}>
        <Typography variant="subtitle1">Backend</Typography>
        <SkillSection skills={skills.backend} />
      </Grid>
    </Grid>
  );
};

const SkillSection = ({ skills }: { skills: Skill[] }) => {
  const classes = useStyles();

  return (
    <>
      {skills.map((skill) => (
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
    </>
  );
};

export interface SkillsProps {
  me: Me;
  skills: Skills;
}

export default Skills;
