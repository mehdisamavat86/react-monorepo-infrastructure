import { useAuthContext } from '@myapp/shared/auth';
import { createContext, memo, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useDebounceEffect, useUnMount } from '../hooks';
import { useWorkspace } from '../workspace/context/context';
import { SOCKET_ENABLED, SOCKET_TIMEOUT, SOCKET_URL } from './constants';
import {
  SocketContextData as ContextData,
  SocketProviderProps as ContextProps,
} from './types';

const context = createContext<ContextData>({} as ContextData);

export const { Provider } = context;

export const SocketProvider = memo(
  ({ children, url = SOCKET_URL }: ContextProps) => {
    const token = useAuthContext();
    const workspaceId = useWorkspace()?.id;
    const [socket, setSocket] = useState<ContextData['socket']>(null);

    const handleConnect = () => console.log('[SocketProvider]', 'connected');
    const handleDisconnect = () =>
      console.log('[SocketProvider]', 'disconnected');

    useEffect(() => {
      if (!SOCKET_ENABLED || !token) return;
      const newSocket = io(url, {
        extraHeaders: {
          Authorization: `Bearer ${token?.token?.access_token}`,
          'X-Customer-ID': workspaceId || '',
        },
        reconnectionDelay: SOCKET_TIMEOUT,
        autoConnect: false,
      });

      setSocket(newSocket);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, url, workspaceId]);

    useUnMount(() => {
      socket?.close();
    });

    useDebounceEffect(
      () => {
        socket?.connect();

        socket?.on('connect', handleConnect);
        socket?.on('disconnect', handleDisconnect);

        return () => {
          socket?.off('connect', handleConnect);
          socket?.off('disconnect', handleDisconnect);
        };
      },
      0,
      [socket]
    );

    return (
      <Provider
        value={{
          url,
          socket,
        }}
      >
        {children}
      </Provider>
    );
  }
);

export const useSocket = () => useContext(context).socket;
