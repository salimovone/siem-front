import { Box, Card, Chip, List, ListItem } from '@mui/material'
import React from 'react'
import CardTitle from '../CardTitle'

const Mitre = () => {
  return (
    <Card>
        <CardTitle title="MITRE ATT&CK" />
        <List>
            <ListItem sx={{display: "flex", width:"100%", justifyContent: "space-between", fontSize: "14px", py: "4px"}} >
                <span style={{color: "#000b"}}>Credential access</span>
                <Chip label="125" variant='filled' size='small' sx={{fontSize: "10px"}} />
            </ListItem>
            <ListItem sx={{display: "flex", width:"100%", justifyContent: "space-between", fontSize: "14px", py: "4px"}} >
                <span style={{color: "#000b"}}>Credential access</span>
                <Chip label="125" variant='filled' size='small' sx={{fontSize: "10px"}} />
            </ListItem>
            <ListItem sx={{display: "flex", width:"100%", justifyContent: "space-between", fontSize: "14px", py: "4px"}} >
                <span style={{color: "#000b"}}>Credential access</span>
                <Chip label="125" variant='filled' size='small' sx={{fontSize: "10px"}} />
            </ListItem>
            <ListItem sx={{display: "flex", width:"100%", justifyContent: "space-between", fontSize: "14px", py: "4px"}} >
                <span style={{color: "#000b"}}>Credential access</span>
                <Chip label="125" variant='filled' size='small' sx={{fontSize: "10px"}} />
            </ListItem>
            <ListItem sx={{display: "flex", width:"100%", justifyContent: "space-between", fontSize: "14px", py: "4px"}} >
                <span style={{color: "#000b"}}>Credential access</span>
                <Chip label="125" variant='filled' size='small' sx={{fontSize: "10px"}} />
            </ListItem>
        </List>
    </Card>
  )
}

export default Mitre