import type { User } from '@auth0/auth0-react';

export interface InviteMemberCardProps {
  className?: string;
  onSubmit?: (member: User) => void;
}
