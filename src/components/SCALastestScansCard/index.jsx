import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  IconButton,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function SCALatestScansCard() {
  const data = {
    policy: 'CIS Benchmark for Debian/Linux 10',
    tag: 'cis_debian10',
    endScan: 'Feb 2, 2023 @ 05:21:40.000',
    passed: 73,
    failed: 111,
    notApplicable: 8,
    score: '39%',
  };

  return (
    <Card sx={{ width: '100%', height: "100%" }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">SCA: Lastest scans</Typography>
          <IconButton size="small">
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Typography variant="body2" fontWeight="bold" color="primary">
            {data.policy}
          </Typography>
          <Chip label={data.tag} size="small" color="success" />
        </div>

        <Table size="small" sx={{display: {md: "block !important", xs: "none !important"}, }}>
          <TableHead>
            <TableRow>
              <TableCell>Policy</TableCell>
              <TableCell>End scan</TableCell>
              <TableCell>Passed</TableCell>
              <TableCell>Failed</TableCell>
              <TableCell>Not applica...</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{data.policy}</TableCell>
              <TableCell>{data.endScan}</TableCell>
              <TableCell>{data.passed}</TableCell>
              <TableCell>{data.failed}</TableCell>
              <TableCell>{data.notApplicable}</TableCell>
              <TableCell>{data.score}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
