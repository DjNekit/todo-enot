import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#282828'
      
    },
    success: {
      main: '#10c200'
    },
    info: {
      main: '#356cf8'
    }
  },
})

export const globalStyles = {
  '*': {
    margin: 0,
    padding: 0
  },
  html: {
    fontSize: '14px'
  },
  body: {
    backgroundColor: '#282828',
    color: '#F4F4F4',
    minHeight: '100vh'
  },

  h1: {
    fontSize: '36px'
  },

  h2: {
    fontSize: '24px'
  },
}