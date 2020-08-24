import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LessonCard from './lessonCard'
import { useLessonsContext } from '../context/useLessonContext'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '150px',
  },
})

let startIndex = 0

const FormRow = () => {
  const classes = useStyles()
  const { lessons } = useLessonsContext()
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {lessons.map((l, i) => {
          if ((i + 1) % 3 == 0 || i == 0 || i + 1 == lessons.length) {
            let temp = startIndex
            startIndex = i != 0 && i + 1
            return (
              <Grid container item xs={12} spacing={3}>
                <React.Fragment>
                  {lessons.slice(temp, temp + 3).map((l) => (
                    <Grid item xs={4} style={{ marginTop: '10px', minWidth: '350px' }}>
                      <LessonCard
                        key={l.id}
                        lesson={l}
                      />
                    </Grid>
                  ))}
                </React.Fragment>
              </Grid>
            )
          }
        })}
      </Grid>
    </div>
  )
}

export default FormRow