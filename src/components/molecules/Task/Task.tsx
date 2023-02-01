import React, { FC } from 'react'
import { Divider, Switch } from '@/components/atoms'
import Box from '@mui/material/Box'

interface TaskProps {

}

export const Task: FC<TaskProps> = () => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      gap='6px'
    >
      <Box
        display='flex'
        gap='14px'
        minWidth='0'
        flex='1'
      >
        <Divider />
        <Box
          display='flex'
          flexDirection='column'
          minWidth={0}
          width='100%'
        >
          <h2>Visit David</h2>
          <Box
            textOverflow='ellipsis'
            overflow='hidden'
            whiteSpace='nowrap'
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti accusamus officia, alias perspiciatis voluptatum voluptate sit quisquam ullam voluptatibus ut dicta inventore veritatis, minus dolore, beatae ducimus labore distinctio praesentium!
            Maiores debitis illo minima voluptate vitae sapiente vero, quibusdam enim itaque ratione labore perspiciatis voluptas quos modi sint magnam quae. Blanditiis repudiandae rem qui cum aspernatur. Accusantium id qui tempora.
          </Box>
        </Box>
      </Box>
      <Switch />
    </Box>
  )
}