import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const data = [
  {
    time: 'Feb 2, 2023 @ 05:22:40.194',
    path: '/etc/resolv.conf',
    action: 'modified',
    description: 'Integrity checksum changed.',
    level: 7,
    ruleId: 550,
  },
  {
    time: 'Feb 1, 2023 @ 17:22:36.977',
    path: '/etc/resolv.conf',
    action: 'modified',
    description: 'Integrity checksum changed.',
    level: 7,
    ruleId: 550,
  },
];

export default function FIMRecentEventsCard() {
  return (
    <Card sx={{ maxWidth: 900, margin: 'auto' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" gutterBottom>
            FIM: Recent events
          </Typography>
          <IconButton size="small">
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </div>
        <TableContainer component={Paper} elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><b>Time</b></TableCell>
                <TableCell><b>Path</b></TableCell>
                <TableCell><b>Action</b></TableCell>
                <TableCell><b>Rule description</b></TableCell>
                <TableCell><b>Rule Level</b></TableCell>
                <TableCell><b>Rule Id</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.time}</TableCell>
                  <TableCell style={{ color: '#1976d2', cursor: 'pointer' }}>{row.path}</TableCell>
                  <TableCell>{row.action}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.level}</TableCell>
                  <TableCell>{row.ruleId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
