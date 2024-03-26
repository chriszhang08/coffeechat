import { DatePicker, DatePickerProps, DatesProvider } from '@mantine/dates';
import { useState } from 'react';
import { AvailabilityModal } from '@/components/ProfilePage/AvailabilityCalendar/AvailabilityModal';
import fakeAvailability from '@/data/mock-data/fakeAvailability';

export function AvailabilityCalendar() {
  const [selected, setSelected] = useState<Date | null>(null);

  const getDayProps: DatePickerProps['getDayProps'] = (date) => {
    if (!fakeAvailability.availability[date.getDate()].includes(1)) {
      return {
        style: {
          backgroundColor: 'var(--mantine-color-gray-filled)',
          color: 'var(--mantine-color-light-gray)',
        },
      };
    }

    return {};
  };

  return (
    <DatesProvider settings={{
      locale: 'ru',
      firstDayOfWeek: 0,
      weekendDays: [0],
      timezone: 'UTC',
    }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
      }}
      >
        <h1 style={{ textAlign: 'center' }}>Book a Session</h1>
        <DatePicker
          weekendDays={[]}
          value={selected}
          onChange={setSelected}
          getDayProps={getDayProps}
          allowDeselect
        />
        {selected && (
          <AvailabilityModal
            date={selected}
            dailyAvailability={fakeAvailability.availability[selected.getDate() - 1]}
          />
        )}
      </div>
    </DatesProvider>
  );
}
