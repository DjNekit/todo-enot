import React, { FC } from 'react'
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import SettingsIcon from '@mui/icons-material/Settings';

import { theme, globalStyles } from '@/theme';
import { TodayTasks } from './components/organisms';

const inputGlobalStyles = <GlobalStyles styles={globalStyles}/>

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {inputGlobalStyles}
      <Box padding='13px 20px'>
        <FormGroup>
          <Box 
            display='flex' 
            justifyContent='space-between'
            alignItems='center'
            padding='0 15px'
          >
            <h1>To Do</h1>
            <SettingsIcon fontSize='large' sx={{ cursor: 'pointer' }}/>
          </Box>
          <TodayTasks />
        </FormGroup>
      </Box>
    </ThemeProvider>
  )
}