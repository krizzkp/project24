import React from 'react'
import {Button,TextField} from '@mui/material';
const Login = () => {
  return (
    <div>
 <TextField label="Username" variant='outlined'/>
 <TextField id="outlined-basic" label="password" variant="outlined" />
<Button varient='contained' color='secondary'>login</Button><br></br>
<Button variant ='outlined'>login</Button>
    </div>
  )
}

export default Login