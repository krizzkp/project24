import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Trail = () => {
    var[pagename,setpagename]=useState("home page");
    const gallerypage=()=>{
        setpagename("gallary page")
    }
        const contactpage=()=>{
    }

  return (
    <div>
        <Button variant="contained" color='primary'>home page</Button>
        <Button variant="contained" color='error' onClick={gallerypage}>gallary page </Button>
        <Button variant="contained" color='success' onClick={contactpage}>CONTACT PAGE </Button>
        <Typography>welcome to ooty {pagename}</Typography>
    </div>
  )
}

export default Trail