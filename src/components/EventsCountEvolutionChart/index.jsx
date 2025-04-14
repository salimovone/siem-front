import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

export default function EventsCountEvolutionChart() {
  return (
    <Card sx={{ width: '100%', height: 400 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Events count evolution
        </Typography>
        <LineChart
          height={300}
          series={[{ data: [10, 40, 20, 160, 0, 230, 10], label: 'Events' }]}
          xAxis={[{ scaleType: 'point', data: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'] }]}
          yAxis={[{ label: 'Count' }]}
          margin={{ top: 20, right: 20, bottom: 30, left: 60 }}
        />
      </CardContent>
    </Card>
  );
}
