import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter1 = () => {
          var[value,setvalue]= useState(0)
          const add=()=>{
setvalue(++value)
        }
        const minus=()=>{
            setvalue(--value)
        }
  return (
    <div>
        <Typography>{value}</Typography>
        <Button variant='contained'color='error' onClick={add}>+</Button>
        <Button variant='text'color='error' onClick={minus}>-</Button>
    </div>
  )
}

export default Counter1