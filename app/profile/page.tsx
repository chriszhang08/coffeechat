'use client';

import { ProfileBadge } from '@/components/ProfilePage/ProfileBadge/ProfileBadge';
import { CommentStack } from '@/components/Comments/CommentStack';
import { AvailabilityCalendar } from '@/components/ProfilePage/AvailabilityCalendar/AvailabilityCalendar';
import { HeaderSearch } from '@/components/Navbar/Header';

async function Page() {
  return (
    <>
      <HeaderSearch />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 10,
        }}
        >
          <ProfileBadge />
          <CommentStack />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 10,
        }}
        >
          <AvailabilityCalendar />
        </div>
      </div>
    </>
  );
}

export default Page;
