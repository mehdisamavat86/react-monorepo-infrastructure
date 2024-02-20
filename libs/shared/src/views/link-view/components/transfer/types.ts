export enum TransferType {
  Transfer = 'transfer',
  Member = 'member',
}

export type TransferLinkUrlParams = {
  type: TransferType;
  username: string;
  firstname: string;
  lastname: string;
};

export interface TransferProps {
  className?: string;
}
