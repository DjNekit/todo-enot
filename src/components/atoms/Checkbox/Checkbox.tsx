import React, { FC } from 'react'
import MUICheckbox, { CheckboxProps } from '@mui/material/Checkbox'
import { CheckIcon } from '../icons/CheckIcon'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'

// interface CheckboxProps {

// }

export const Checkbox: FC<CheckboxProps> = (props) => {
  const theme = useTheme()
  
  return (
    <MUICheckbox
      checkedIcon={<CheckIcon />}
      icon={
        <Box
          width={23}
          height={23}
          bgcolor='#F4F4F4'
          borderRadius='7px'
        />
      }
      sx={{
        '& .MuiSvgIcon-root': {
          width: '23px',
          height: '23px',
          borderRadius: '6px'
        }
      }}
      {...props}
    />
  )
}