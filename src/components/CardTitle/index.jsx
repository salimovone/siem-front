import { Typography } from '@mui/material'
import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';

const CardTitle = ({title}) => {
  return (
    <Typography sx={{padding: "10px 8px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "16px", fontWeight: "600", color: "#000b"}}>
        <span>{title}</span>
        <LaunchIcon sx={{fontSize: "16px", color: "#0000ffbb", cursor: "pointer"}} />  
    </Typography>
  )
}

export default CardTitle