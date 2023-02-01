import React, { FC } from 'react'
import Box from '@mui/material/Box';

interface DividerProps {}

export const Divider: FC<DividerProps> = () => {
  return (
    <Box
      width='5px'
      minHeight='40px'
      bgcolor='blue'
      borderRadius='3px'
    />
  )
}