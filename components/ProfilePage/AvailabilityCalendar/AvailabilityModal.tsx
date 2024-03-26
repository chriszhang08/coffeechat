import { Button, Grid } from '@mantine/core';
import React from 'react';

function convertToDate(year : number, month : number, day : number, index : number): string {
  const date = new Date(year, month, day);
  const hour = Math.floor(index / 4);
  const minute = (index % 4) * 15;

  date.setHours(hour, minute, 0, 0); // Set hours, minutes, and seconds, milliseconds

  // Format the date to "H:MM AM/PM" format
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function AvailabilityModal({ date, dailyAvailability }: {
  date: Date;
  dailyAvailability: number[]
}) {
  const rows = dailyAvailability.map((time, index) => (
    time === 1 && (
      <Grid.Col span={4} key={index}>
        <Button fullWidth style={{ paddingLeft: 'unset', paddingRight: 'unset' }}>
          {convertToDate(date.getFullYear(), date.getMonth(), date.getDate(), index)}
        </Button>
      </Grid.Col>
    )
  ));

  const rowsHeight = dailyAvailability.filter(time => time === 1).length * 50; // Assuming each button has a height of 50px

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Change the maxHeight to your desired value */}
      <Grid style={{ paddingTop: 20, height: rowsHeight > 400 ? '100%' : 'auto' }}>
        {rows}
      </Grid>
    </div>
  );
}
