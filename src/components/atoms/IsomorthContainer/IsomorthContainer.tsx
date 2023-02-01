import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { useTheme } from '@mui/material'

export const IsomorthContainer: FC<BoxProps> = React.forwardRef((props, ref) => {
  const theme = useTheme()
  return (
    <Box
      ref={ref}
      bgcolor={theme.palette.background.default}
      borderRadius='25px'
      boxShadow='16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05);'
      p='16px 25px 18px 17px'
      {...props}
    >
      {props.children}
    </Box>
  )
})