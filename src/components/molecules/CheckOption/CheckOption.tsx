import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Checkbox } from '@/components/atoms'
import { CheckboxProps } from '@mui/material'

interface CheckOptionProps extends CheckboxProps {
  name: string
  label: ReactNode | 'string'
}

export const CheckOption: FC<CheckOptionProps> = ({ name, label, ...rest }) => {
  return (
    <Box display='flex' gap='10px' alignItems='center'>
      <Checkbox name={name} {...rest}/>
      <label htmlFor={name}>
        {label}
      </label>
    </Box>
  )
}