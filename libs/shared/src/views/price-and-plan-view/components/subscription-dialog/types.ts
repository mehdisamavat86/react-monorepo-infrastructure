export interface SubscriptionDialogProps {
  className?: string;
  open: boolean;
  onClose: () => void;
  content?: JSX.Element;
}
