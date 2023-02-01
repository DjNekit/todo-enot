import React, { FC, useState } from 'react'
import { IsomorthContainer } from '@/components/atoms'
import { CheckOption, Task } from '@/components/molecules'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'

interface TodayTasksProps {

}

export const TodayTasks: FC<TodayTasksProps> = () => {
  const [showTasks, setShowTasks] = useState(true) 

  return (
    <Box width='100%'>
      <Box padding='0 8px'>
        <CheckOption
          name='today-show'
          label={<h2>Today Tasks</h2>}
          onChange={() => setShowTasks(prev => !prev)}
        />
      </Box>
      <Fade in={showTasks} unmountOnExit>
        <IsomorthContainer
          display='flex'
          flexDirection='column'
          gap='20px'
          overflow='hidden'
          width='100%'
        >
          <Task />
          <Task />
          <Task />
        </IsomorthContainer>
      </Fade>
    </Box>
  )
}