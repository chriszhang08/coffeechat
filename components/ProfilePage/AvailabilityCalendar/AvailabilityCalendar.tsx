import { Calendar, DatesProvider } from '@mantine/dates';
import { useState } from 'react';
import dayjs from 'dayjs';
import { AvailabilityModal } from '@/components/ProfilePage/AvailabilityCalendar/AvailabilityModal';

export function AvailabilityCalendar() {
  const [selected, setSelected] = useState<Date[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const handleSelect = (date: Date) => {
    setModalOpen(true);
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px' }}>
        <h1 style={{ textAlign: 'center' }}>Book a Session</h1>
        <Calendar getDayProps={(date) => ({
          selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
          onClick: () => handleSelect(date),
        })}
        />
        {modalOpen && (
          <AvailabilityModal />
        )}
      </div>
    </DatesProvider>
  );
}
