import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [frame,setframe]=useState("tiya")
    const changename=()=>{
        console.log("clicked")
    setframe("kp")
    }
  return (
    <div>
        <Typography>welcome {frame}</Typography>
      <Button variant="contained" color='primary' onClick={changename}>change</Button>
      <Button variant="contained" color='primary'>submit </Button>
      <Button variant="contained" color='primary'>login</Button>
    </div>
  )
}

export default Statebasic