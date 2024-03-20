import { Button, Grid } from '@mantine/core';
import React from 'react';

const times = [
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
];

const rows = times.map((time) => (
  <Grid.Col span={4}>
    <Button>{time}</Button>
  </Grid.Col>
));

export function AvailabilityModal() {
  return (
    <Grid style={{ paddingTop: 20 }}>
      {rows}
    </Grid>
  );
}
