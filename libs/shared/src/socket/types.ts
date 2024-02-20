import { Nil, SocketProviderConfig } from '@myapp/shared/definition';
import { PropsWithChildren } from 'react';
import type { Socket } from 'socket.io-client';

export interface SocketProviderProps
  extends SocketProviderConfig,
    PropsWithChildren {}

export interface SocketContextData {
  url?: string;
  socket: Nil<Socket>;
}

export interface UseSocketEventOptions {
  wait?: number;
}
