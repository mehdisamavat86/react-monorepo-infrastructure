import { ActionGroupItem } from '../../types';

export interface ActionProps {
  className?: string;
  item: ActionGroupItem;
  onClick: (item: ActionGroupItem) => void;
}
