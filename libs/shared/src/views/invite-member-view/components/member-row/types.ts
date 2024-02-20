export interface MemberRowProps {
  className?: string;
  index: number;
  remove?: false | ((index: number) => void);
}
