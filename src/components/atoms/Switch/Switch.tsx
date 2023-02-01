import { styled } from "@mui/material";
import MUISwitch, { SwitchProps } from '@mui/material/Switch';


export const Switch = styled((props: SwitchProps) => (
  <MUISwitch
    sx={{ m: 1 }} defaultChecked
    focusVisibleClassName=".Mui-focusVisible" 
    disableRipple 
    {...props} 
  />

))(({ theme }) => ({
  width: 50,
  height: 29,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(21px)',
      color: '#fff',
      '& .MuiSwitch-thumb:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z" fill="${encodeURIComponent('#A9A9A9')}"/></svg>')`,
        transition: theme.transitions.create(['background-image'], {
          duration: 250,
        }),
      },
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.success.main,
        backgroundIcon: '',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 25,
    height: 25,

    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.8976 13.2468L6.61086 7.95169L1.32411 13.2468L0.143738 12.0664L5.4388 6.77962L0.143738 1.49287L1.32411 0.3125L6.61086 5.60756L11.8976 0.320813L13.0697 1.49287L7.78293 6.77962L13.0697 12.0664L11.8976 13.2468Z" fill="${encodeURIComponent('#A9A9A9')}"/></svg>')`,
      transition: theme.transitions.create(['background-image'], {
        duration: 250,
      }),
    }
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: theme.palette.info.main,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

