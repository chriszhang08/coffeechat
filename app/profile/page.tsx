import { ProfileBadge } from '@/components/ProfilePage/ProfileBadge/ProfileBadge';
import { CommentHtml } from '@/components/Comments/CommentHtml';

async function Page() {
  return (
    <div>
      <ProfileBadge />
      <CommentHtml />
    </div>
  );
}

export default Page;
