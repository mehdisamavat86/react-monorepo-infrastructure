import type { Transfer, Workspace } from '@myapp/shared/definition';

export type TransferDetail = Omit<Transfer, 'status' | 'created'>;

export interface TransferRequest {
  password: string;
  transfer: TransferDetail;
}
export type TransferResponse = Workspace;

export interface CancelTransferRequest {}
export type CancelTransferResponse = Workspace;

export interface ResendTransferRequest {}
export type ResendTransferResponse = Workspace;
