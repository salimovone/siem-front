import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Collapse,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ComputerIcon from '@mui/icons-material/Computer';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import LanIcon from '@mui/icons-material/Lan';

const agents = [
  {
    name: 'Agent-001',
    os: 'linux',
    isActive: true,
    macAddress: '00:1A:2B:3C:4D:5E',
    moreInfo: {
      ip: '192.168.1.10',
      hostname: 'debian-node',
      lastSeen: '2025-04-14 12:32:10',
      version: '4.1.2',
    },
  },
  {
    name: 'Agent-002',
    os: 'windows',
    isActive: false,
    macAddress: '00:2B:3C:4D:5E:6F',
    moreInfo: {
      ip: '192.168.1.11',
      hostname: 'win-agent',
      lastSeen: '2025-04-10 18:03:22',
      version: '3.8.7',
    },
  },
];

const getOSIcon = (os) => {
  switch (os) {
    case 'linux':
    case 'windows':
      return <ComputerIcon />;
    case 'mac':
      return <AppleIcon />;
    case 'android':
      return <AndroidIcon />;
    default:
      return <ComputerIcon />;
  }
};

const StatusChip = ({ active }) => (
  <Chip
    label={active ? 'Active' : 'Inactive'}
    size="small"
    sx={{
      backgroundColor: active ? 'green' : 'gray',
      color: 'white',
    }}
  />
);

export default function Agents() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Grid container spacing={2} direction="column">
      {agents.map((agent, index) => (
        <Grid item xs={12} key={agent.name}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <IconButton onClick={() => toggleOpen(index)}>
                    {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Grid>

                <Grid item>
                  <Typography variant="h6">{agent.name}</Typography>
                </Grid>

                <Grid item>{getOSIcon(agent.os)}</Grid>

                <Grid item>
                  <StatusChip active={agent.isActive} />
                </Grid>

                <Grid item>
                  <LanIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                  <Typography variant="body2" component="span">
                    {agent.macAddress}
                  </Typography>
                </Grid>
              </Grid>

              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <Divider sx={{ my: 2 }} />
                <Box pl={6}>
                  <Typography variant="body2"><strong>IP Address:</strong> {agent.moreInfo.ip}</Typography>
                  <Typography variant="body2"><strong>Hostname:</strong> {agent.moreInfo.hostname}</Typography>
                  <Typography variant="body2"><strong>Last Seen:</strong> {agent.moreInfo.lastSeen}</Typography>
                  <Typography variant="body2"><strong>Agent Version:</strong> {agent.moreInfo.version}</Typography>
                </Box>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
