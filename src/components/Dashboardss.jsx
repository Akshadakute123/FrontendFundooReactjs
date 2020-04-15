import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react'
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
export default function Hello()
{
    const classes=theme
    console.log(classes)
    return(
        <div className={classes.theme.primary}>
            <button>hdjdhhhdhhdhhd</button> 
            </div>
    )
}