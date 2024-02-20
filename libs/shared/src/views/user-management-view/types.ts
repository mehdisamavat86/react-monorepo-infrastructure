import type { Member } from '@myapp/shared/definition';

export type MemberTableActionDialogProps = {
  item: Member;
  onClose: () => void;
};
